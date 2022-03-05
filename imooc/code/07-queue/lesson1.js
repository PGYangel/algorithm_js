/* 
队列是一种特殊的线性表，只允许在表的前端进行删除操作，而在表的后端进行插入操作。先进先出的特点。
和栈一样，队列是一种操作受限的线性表。

设计循环队列
设计你的循环队列实现。循环队列是一种线性数据结构，其操作表现基于FIFO（先进先出）原则，
并且队尾被连接在队首之后以形成一个循环。
它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。
在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。
但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：
1、MyCircularQueue(k)：构造器，设置队列长度为k
2、Front：从队首获取元素，如果队列为空，返回-1
3、Rear：获取队尾元素，如果队列为空，返回-1
4、enQueue(value)：向循环队列插入一个元素。如果成功插入则返回真。
5、deQueue()：从循环队列中删除一个元素。如果成功删除则返回真。
6、isEmpty()：检查循环队列是否为空。
7、isFull()：检查循环队列是否已满。

*/

export default class MyCircularQueue {
    constructor(k) {
        // 生成长度为k的队列
        this.queue = Array(k)
        // 队首指针
        this.front = 0
        // 队尾指针
        this.rear = 0
        // 队列最大长度
        this.max = k
    }
    // 从队首获取元素，如果队列为空，返回-1
    Front() {
        if (this.isEmpty()) {
            return -1
        } else {
            return this.queue[this.front]
        }
    }
    // 获取队尾元素，如果队列为空，返回-1
    Rear() {
        if (this.isEmpty()) {
            return -1
        } else {
            // 获取队尾的值此时队尾指针是下一个要插入的地方，所以获取时要-1
            // 如果队尾指针移动到0的位置，-1小于0，则获取值应该是最大长度-1的位置的值
            return this.queue[this.rear - 1 < 0 ? this.max - 1 : this.rear - 1]
        }
    }
    // 向循环队列插入一个元素。如果成功插入则返回真。
    enQueue(value) {
        // 队列不满的情况都可以插入
        if (this.isFull()) {
            return false
        } else {
            this.queue[this.rear] = value
            // 插入之后，队尾指针要向后移动，如果超过最大边界指针返回第一个
            this.rear = (this.rear + 1) % this.max
            return true
        }
    }
    // 从循环队列中删除一个元素。如果成功删除则返回真。
    deQueue() {
        // 如果队列为空不能删除，队列从队首指针开始删除
        if (this.isEmpty()) {
            return false
        } else {
            this.queue[this.front] = undefined
            // 删除后队首指针往后移动，如果超过最大边界返回第一个
            this.front = (this.front + 1) % this.max
            return true
        }
    }
    // 检查循环队列是否为空。
    isEmpty() {
        // 队列为空的时候，队首和队尾指针一定在同一个位置
        // 并且数值为空，因为如果队列长度只有1时，那么首尾指针永远一样，那么就要判断值为空
        return this.front === this.rear && !this.queue[this.front]
    }
    // 检查循环队列是否已满。
    isFull() {
        // 队列满的时候，队首和队尾指针也在同一个位置
        // 所以要判断数值是否为空，如果有数值则队列是满的
        return this.front === this.rear && !!this.queue[this.front]
    }
}