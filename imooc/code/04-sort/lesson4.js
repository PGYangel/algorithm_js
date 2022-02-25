/* 
按奇偶排序数组 ||

给定一个非负整数数组A，A中一半整数是奇数，一半整数时偶数。

对数组进行排序，以便当A[i]为奇数时，i也是奇数；
当A[i]为偶数时，i也是偶数。

你可以返回任何满足上述条件的数组作为答案。

示例：
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5],[2,5,4,7],[2,7,4,5]也会被接受

*/

export default (arr) => {
    arr.sort()
    let result = []
    let even = 0; // 偶数游标
    let odd = 1; // 奇数游标

    for (let i = 0, len = arr.length; i < len; i++) {
        // 奇数
        if (arr[i] % 2 === 1) {
            result[odd] = arr[i]
            odd += 2
        } else {
            // 偶数
            result[even] = arr[i]
            even += 2
        }
    }
    return result
}