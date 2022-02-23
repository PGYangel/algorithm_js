import lesson2 from '../../code/03-RegExp/lesson2'

test('lesson2', () => {
    expect(lesson2('mississippi', 'mis*is*p*.')).toBe(false)
})

test('lesson2', () => {
    expect(lesson2('aaa', 'caa*')).toBe(false)
})

test('lesson2', () => {
    expect(lesson2('aaabc', 'a*bc')).toBe(true)
})

test('lesson2', () => {
    expect(lesson2('aaabc', 'a*.*')).toBe(true)
})