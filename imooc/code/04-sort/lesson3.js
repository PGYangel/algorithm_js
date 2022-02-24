/* 
最大间距

给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于2，则返回0

示例1：
输入：[3,6,9,1]
输出：3
解释：排序后的数组时 [1,3,6,9]，其中相邻元素（3,6）和（6,9）之间都存在最大差值3

示例2：
输入：[10]
输出：0
解释：数组元素个数小于2，因此返回0
*/

/* 
// 常规方法先排序，再从头找最大差值，但是不是最优效率
export default (arr) => {
    if (arr.length < 2) {
        return 0
    }
    arr.sort()
    let max = 0
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i + 1] - arr[i] > max) {
            max = arr[i + 1] - arr[i]
        }
    }
    return max
} 
*/

// 利用冒泡排序，在排序的时候求差值，减少遍历次数
export default (arr) => {
    if (arr.length < 2) {
        return 0
    }
    let max = 0
    let len = arr.length - 1
    for (let i = len, tmp; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        if (i < len) {
            if (arr[i + 1] - arr[i] > max) {
                max = arr[i + 1] - arr[i]
            }
        }
    }
    return max
}