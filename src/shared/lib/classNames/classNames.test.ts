import {classNames} from "./classNames";

describe('classNames', () => {
    test('oddiy class', ()=> {
        expect(classNames('app', {},[])).toBe('app')
    })

    test(' classes', ()=> {
        const expected = 'app class1 class2'
        expect(classNames('app', {},['class1','class2'])).toBe(expected)
    })

    test('mods and classess', ()=>{
        const expected = 'app class1 hovered'
        expect(classNames('app', {hovered: true}, ['class1'])).toBe(expected)
    })
    test('undefined null', ()=> {
        expect(classNames('', {hovered: undefined},[])).toBe('')
    })

})