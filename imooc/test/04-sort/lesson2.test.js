import lesson2 from '../../code/04-sort/lesson2'

test('lesson2', () => {
    expect(lesson2([2, 4, 4, 5, 1, 3, 4])).toEqual([1, 2, 3, 4, 4, 4, 5])
})

test('lesson2', () => {
    expect(lesson2([44, 23, 33, 21, 25, 9, 3, 4, 1])).toEqual([1, 3, 4, 9, 21, 23, 25, 33, 44])
})