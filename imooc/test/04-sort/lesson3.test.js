import lesson3 from '../../code/04-sort/lesson3'

test('lesson3', () => {
    expect(lesson3([6, 3, 9, 1])).toBe(3)
})

test('lesson3', () => {
    expect(lesson3([10])).toBe(0)
})

test('lesson3', () => {
    expect(lesson3([13, 16, 19, 1])).toBe(12)
})