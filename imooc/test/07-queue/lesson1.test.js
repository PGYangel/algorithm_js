import MyCircularQueue from '../../code/07-queue/lesson1'

test('lesson1', () => {
    let queue = new MyCircularQueue(4)
    queue.enQueue(2)
    expect(queue.isFull()).toBe(false)
    expect(queue.enQueue(1)).toBe(true)
    expect(queue.Front()).toBe(2)
    expect(queue.Rear()).toBe(1)
})

test('lesson1', () => {
    let queue = new MyCircularQueue(4)
    queue.enQueue(1)
    queue.enQueue(2)
    queue.enQueue(3)
    queue.enQueue(4)
    expect(queue.isFull()).toBe(true)
    expect(queue.enQueue()).toBe(false)
    expect(queue.Front()).toBe(1)
    expect(queue.Rear()).toBe(4)
})