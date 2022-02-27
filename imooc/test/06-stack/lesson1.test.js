import lesson1 from '../../code/06-stack/lesson1'

test('lesson1', () => {
    expect(lesson1(["5", "2", "C", "D", "+"])).toBe(30)
})

test('lesson1', () => {
    expect(lesson1(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27)
})