import leastInterval from '../../code/07-queue/lesson2'

test('leastInterval', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
    expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8)
})