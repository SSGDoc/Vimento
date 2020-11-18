
//let number = calculatePercentageOf(20, 100);


var filterArray = new Array();
var markers = new Array();

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
mKab.downFiber = 20;
mKab.downKabel = 100;
mKab.downDsl = 20;
mKab.mobil = 30;
mKab.name = 'Kab';

var mFib = new L.circleMarker([0.00, 0.00]);
mFib.downFiber = 100;
mFib.downKabel = 0;
mFib.downDsl = 0;
mFib.mobil = 30;
mFib.name = 'Fib';

filterArray.push(mMob);
filterArray.push(mDsl);
filterArray.push(mKab);
filterArray.push(mFib);





describe("check avaliable", () => {

    it('Fiber should be true ', () => {
        expect(checkFiber(mFib)).toBe(true);
    })
    it('Kabel should be false ', () => {
        expect(checkKabel(mFib)).toBe(false);
    })
    it('Mobile should be true ', () => {
        expect(checkMobil(mFib)).toBe(true);
    })
    it('DSL should be false ', () => {
        expect(checkDsl(mFib)).toBe(false);
    })
});