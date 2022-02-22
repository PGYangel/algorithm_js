import lesson1 from '../../code/03-RegExp/lesson1'

test('lesson1', () => {
    expect(lesson1('abab')).toBe(true)
})

test('lesson1', () => {
    expect(lesson1('aba')).toBe(false)
})

test('lesson1', () => {
    expect(lesson1('abcabcabcabc')).toBe(true)
})