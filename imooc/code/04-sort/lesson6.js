/* 
缺失的第一个正数

给定一个未排序的整数数组，找出其中没有出现的最小正整数

示例1：
输入：[1,2,0]
输出：3

示例2：
输入：[3,4,-1,1]
输出：2

示例3：
输入：[7,8,9,11,12]
输出：1
*/

// 利用选择排序，因为选择排序是从最小是开始排序
// 先拿到最小值，如果第一个元素不是1则直接返回1，如果是1，就要比相邻元素差值
export default (arr) => {
    // 先将数组筛选大于0的值然后再进行排序
    arr = arr.filter(item => item > 0)
    for (let i = 0, len = arr.length, min; i < len; i++) {
        min = arr[i]
        for (let j = i + 1; j < len; j++) {
            if (min > arr[j]) {
                let tmp = min
                min = arr[j]
                arr[j] = tmp
            }
        }
        arr[i] = min
        if (i > 0) {
            // 不是第一个元素判断差值
            // 例如第二个数减第一个数大于1，则最小正整数就是第一个数+1
            if (arr[i] - arr[i - 1] > 1) {
                return arr[i - 1] + 1
            }
        } else {
            // 第一个元素不是1则直接返回1
            if (min !== 1) {
                return 1
            }
        }
    }
    // 如果数组是连续的，则返回最后一项+1，如果是空数组，则直接返回1
    return arr.length ? arr.pop() + 1 : 1

}