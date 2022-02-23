import lesson1 from '../../code/04-sort/lesson1'

test('lesson1', () => {
    expect(lesson1([2, 4, 5, 1, 3])).toEqual([1, 2, 3, 4, 5])
})

test('lesson1', () => {
    expect(lesson1([44, 23, 33, 21, 25, 9, 3, 4, 1])).toEqual([1, 3, 4, 9, 21, 23, 25, 33, 44])
})