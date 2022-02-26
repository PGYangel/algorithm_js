/* 
数组中的第 K 个最大元素

在未排序的数组中找到第K个最大的元素。请注意，你需要找的是数组排序后的第K个最大的元素。
而不是第K个不同的元素。

示例1：
输入：[3,2,1,5,6,4] 和 k=2
输出：5
解释：排序后是[6,5,4,3,2,1]，所以最大第2个的是5

示例2：
输入：[3,2,3,1,2,4,5,5,6] 和 k=4
输出：4

*/

// 使用sort进行排序
// export default (arr, k) => {
//     return arr.sort((a, b) => b - a)[k - 1]
// }

// 利用冒泡排序，因为冒泡排序先进行最大值排序，只要遍历k轮最大值就可以获取到第k个最大值
export default (arr, k) => {
    let result = 0
    let cur = 0
    for (let i = arr.length - 1, tmp; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j]
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        cur++
        if (cur === k) {
            result = arr[i]
            break
        }
    }
    return result
}