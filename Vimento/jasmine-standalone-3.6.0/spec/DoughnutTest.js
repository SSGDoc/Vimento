//Test calculatePercentageOf
//Arrange|Act
let number = calculatePercentageOf(20, 100);
//Assert
describe(number, () => {

    it('Expected 20.00', () => {
        expect(number).toBe('20.00');
    })
});

//Test allocateBest
//Arrange
var markersArray = new Array();

var mMob = new L.circleMarker([0.00, 0.00]);
mMob.downFiber = 10;
mMob.downKabel = 20;
mMob.downDsl = 30;
mMob.mobil = 100;
mMob.name = 'Mob';

var mDsl = new L.circleMarker([0.00, 0.00]);
mDsl.downFiber = 10;
mDsl.downKabel = 20;
mDsl.downDsl = 100;
mDsl.mobil = 30;
mDsl.name = 'Dsl';

var mKab = new L.circleMarker([0.00, 0.00]);
mKab.downFiber = 10;
mKab.downKabel = 100;
mKab.downDsl = 20;
mKab.mobil = 30;
mKab.name = 'Kab';

var mFib = new L.circleMarker([0.00, 0.00]);
mFib.downFiber = 100;
mFib.downKabel = 10;
mFib.downDsl = 20;
mFib.mobil = 30;
mFib.name = 'Fib';

markersArray.push(mMob);
markersArray.push(mDsl);
markersArray.push(mKab);
markersArray.push(mFib);

//Act
allocateBest(markersArray);

//Assert
describe('Mobil', () => {

    it('Should be Mob', () => {
        expect(mobilBest[0].name).toBe('Mob');
    })
});
describe('Dsl', () => {

    it('Should be Dsl', () => {
        expect(dslBest[0].name).toBe('Dsl');
    })
});
describe('Kabel', () => {

    it('Should be Kab', () => {
        expect(kabelBest[0].name).toBe('Kab');
    })
});
describe('Fiber', () => {

    it('Should be Fib', () => {
        expect(fiberBest[0].name).toBe('Fib');
    })
});

//Test updateTopCardFiber
//Arrange
