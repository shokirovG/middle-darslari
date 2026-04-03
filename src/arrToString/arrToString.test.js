import arrToString from "./arrToString.js";

describe('arrToString', () => {
    test('number ', ()=> {
        expect(arrToString([1,2,3])).toEqual(['1','2','3']);
    })
    test('nul,undefined ', ()=> {
        expect(arrToString([1,2,3,undefined, null])).toEqual(['1','2','3']);
    })
    test('empty ', ()=> {
        expect(arrToString([])).toEqual([]);
    })
})