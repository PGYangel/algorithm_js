/* 
卡牌分组

给定一副牌，每张牌上都写着一个整数，顺序是打乱的

此时，你需要选定一个数字 X，使我们可以将整幅牌按下述规则分成1组或更多组：
    1、每组都有 X 张牌
    2、组内所有的牌上都写着相同的整数
仅当你可选的 X>=2 时返回 true

示例1：
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1],[2,2],[3,3],[4,4]

示例2：
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：分组是[1,1,1],[2,2,2],[3,3]，不满足条件1，因为3的分组只有2张，其他是3张不满足所有组都是X张

示例3：
输入：[1]
输出：false
解释：因为X不大于等于2

示例4：
输入：[1,1]
输出：true

示例5：
输入：[1,1,2,2,2,2]
输出：true
解释：可分组结果[1,1],[2,2],[2,2]

解题思路：
1、先对数组排序，排序后可以根据数字进行分组，如果使用对象可以省去排序再对数字进行分组。
2、数字最小个数分组跟其他数字分组是整数倍的关系，且最小长度是>=2,或者所有数长度的最大公因数没有为1的情况，那么就符合所有条件。

*/

export default (arr) => {
    let result = true
    let numObj = {}
    arr.forEach(item => {
        numObj[item] = numObj[item] ? ++numObj[item] : 1
    })
    // console.log(numObj) // { '1': 2, '2': 2, '3': 2, '4': 2 }
    // 存储所有数字的长度
    let numLengths = []
    for (let val of Object.values(numObj)) {
        numLengths.push(val)
    }
    // 求两个数之间最大公因数
    function gys(a, b) {
        if (b === 0) {
            return a
        } else {
            return gys(b, a % b)
        }
    }
    // 所有数字的长度相互进行比对，满足条件2最大公因数只要没有为1即可
    while (numLengths.length > 1) {
        // 提取第一位和第二位长度，进行最大公因数
        let f = numLengths.shift()
        let s = numLengths.shift()
        let g = gys(f, s)
        // console.log(g)
        if (g === 1) {
            result = false
        } else {
            // 如果公因数不为1，将提取的公因数跟第三位比，公因数跟第三位还不为1，依次往后比较，直到数组剩下1个说明所有数字长度都比对完毕
            numLengths.unshift(g)
        }
    }
    // 判定边界值，如果没有传入数据直接返回false，如果传入一项可以看作最大公因数结果是[1]，这种情况是返回false，只要最大供应商筛选结果是[2]以上即可返回true
    result = numLengths.length ? numLengths[0] > 1 : false
    return result
}

/* 
知识点
1、求两个数之间最大公因数
2、数组中所有数字逐一比对
3、Array.prototype.shift：删除数组第一位元素，并返回删除元素
4、Array.prototype.unshift：数组第一位添加元素，并返回新的长度
*/