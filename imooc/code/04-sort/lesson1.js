/* 
冒泡排序
外层循环从大到小逐渐缩小排序范围
内层循环从小到大逐渐将最大值往右靠
*/
export default (arr) => {
    let temp = null
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] >= arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}