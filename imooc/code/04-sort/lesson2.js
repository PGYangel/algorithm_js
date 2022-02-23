/* 
选择排序
不断循环找最小值，然后每次将最小值往前次之排列，只用后面最小值进行交互
*/
export default (arr) => {
    let min = null
    for (let i = 0; i < arr.length; i++) {
        min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let t = min
                min = arr[j]
                arr[j] = t
            }
        }
        arr[i] = min
    }
    return arr
}