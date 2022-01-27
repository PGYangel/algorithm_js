import lesson3 from '../../code/02-Array/lesson3'

test('lesson3', () => {
    expect(lesson3([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('lesson3', () => {
    expect(lesson3([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toBe(true)
})

test('lesson3', () => {
    expect(lesson3([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('lesson3', () => {
    expect(lesson3([1, 0, 0, 0, 0, 0, 1], 3)).toBe(false)
})

test('lesson3', () => {
    expect(lesson3([0, 1, 0, 0, 0, 0, 0, 1, 0], 3)).toBe(false)
})

test('lesson3', () => {
    expect(lesson3([0, 0, 1, 0, 0, 0, 1], 2)).toBe(true)
})