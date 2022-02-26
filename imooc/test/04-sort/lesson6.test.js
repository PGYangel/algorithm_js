import lesson6 from '../../code/04-sort/lesson6'

test('lesson6', () => {
    expect(lesson6([1, 2, 0])).toBe(3)
})

test('lesson6', () => {
    expect(lesson6([3, 4, -1, 1])).toBe(2)
})

test('lesson6', () => {
    expect(lesson6([7, 8, 9, 11, 12])).toBe(1)
})
test('lesson6', () => {
    expect(lesson6([1, 2, 3, 4])).toBe(5)
})