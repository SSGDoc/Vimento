
let number = calculatePercentageOf(20, 100);
describe(number, () => {

    it('Expected 20.00', () => {
        expect(number).toBe('20.00');
    })
});