/* 
种花问题

假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有，
可是花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花卉，1表示种植了花）
和一个数n，能否在不打破种植规则的情况下种入n朵花？
能则返回true，不能则返回false

示例1：
输入：flowerbed = [1,0,0,0,1], n=1
输出：true

示例2：
输入：flowerbed = [1,0,0,0,1], n=2
输出：false

*/

export default (flowerbed, n) => {
    /* 
    解题思路，先原来花坛前后各加上一个0，判断3个一组数据是否都是000，只有这种情况才一定能种上。前后加0是为了方便统一格式判断。
    加上后数组就成[0,1,0,0,0,0,0,1,0]，这样不用考虑边界判断问题
    种上一棵后需要用新的数组重新计算000的情况，不然会遇见1000001中间五个的情况，这种情况只能种2，不重新计算会得到3个000情况。
    */
    let result = true
    let num = n
    // 前后加上0
    flowerbed.unshift(0)
    flowerbed.push(0)
    function planting(arr, index) {
        // 输入的三个都为0才对num减少，并对原数组对应种植数据改为1
        if (!arr.includes(1)) {
            num--
            flowerbed[index] = 1
        }
    }
    for (let i = 0, il = flowerbed.length - 2; i < il; i++) {
        let arr = flowerbed.slice(i, i + 3)
        planting(arr, i + 1)
    }
    if (num === 0) {
        result = true
    } else {
        result = false
    }
    return result
}

/* 
知识点
Array.prototype.slice：可提取字符串的某个部分，并以新的字符串返回被提取的部分
*/