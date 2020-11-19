
//let number = calculatePercentageOf(20, 100);


var markers = new Array();

var testMark = new L.circleMarker([0.00, 0.00]);
testMark.downFiber = 100;
testMark.downKabel = 0;
testMark.downDsl = 0;
testMark.mobil = 30;
testMark.name = 'Fib';




describe("check avaliable", () => {

    it('Fiber should be true ', () => {
        expect(checkFiber(testMark)).toBe(true);
    })
    it('Kabel should be false ', () => {
        expect(checkKabel(testMark)).toBe(false);
    })
    it('Mobile should be true ', () => {
        expect(checkMobil(testMark)).toBe(true);
    })
    it('DSL should be false ', () => {
        expect(checkDsl(testMark)).toBe(false);
    })
});