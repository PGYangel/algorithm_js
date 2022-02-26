import lesson5 from '../../code/04-sort/lesson5'

test('lesson5', () => {
    expect(lesson5([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})

test('lesson5', () => {
    expect(lesson5([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})