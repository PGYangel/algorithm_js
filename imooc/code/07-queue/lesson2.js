/* 
任务调度器

给定一个用字符数组表示的CPU需要执行的任务列表。
其中包含使用大写的A-Z字母表示的26种不同种类的任务。
任务可以以任意顺序执行，并且每个任务都可以在1个单位时间内执行完。
CPU在任何一个单位时间内都可以执行一个任务，或者在待命状态。

然而，两个相同种类的任务之间必须有长度为N的冷却时间，
因此至少有连续n个单位时间内CPU执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的最短时间。

示例1：
输入：tasks = ['A','A','A','B','B','B'],n=2
输出：8
执行顺序：A -> B -> 待命 A -> B -> 待命 -> A -> B 

解题思路：
优先处理最多的任务，让其他任务穿插在最多的任务之间

*/

export default (tasks, n) => {
    // 表示最终队列执行的结果
    let q = ''
    // 对归类进行存储
    let Q = {}
    tasks.forEach(item => {
        if (Q[item]) {
            Q[item]++
        } else {
            Q[item] = 1
        }
    })
    while (1) {
        // 任务清单
        let keys = Object.keys(Q)
        if (!keys[0]) {
            break
        }
        // 声明一个队列用来存储1+n任务单元
        let tmp = []
        for (let i = 0; i <= n; i++) {
            let max = 0
            let key
            let pos
            keys.forEach((item, idx) => {
                if (Q[item] > max) {
                    max = Q[item]
                    key = item
                    pos = idx
                }
            })
            if (key) {
                tmp.push(key)
                keys.splice(pos, 1)
                Q[key]--
                if (Q[key] < 1) {
                    delete Q[key]
                }
            } else {
                break
            }
        }
        q += tmp.join('').padEnd(n + 1, '-')
    }
    // 边界处理，最后不要出现冷却时间
    q = q.replace(/-+$/g, '')
    return q.length
}