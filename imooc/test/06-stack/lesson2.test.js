import lesson2 from '../../code/06-stack/lesson2'

test('lesson2', () => {
    expect(lesson2([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0]
    ])).toBe(6)
})

// test('lesson2', () => {
//     expect(lesson2([
//         [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
//         [0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
//         [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
//         [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//         [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
//     ])).toBe(15)
// })