/**
公式运算--电话号码的字母组合

给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合，
给出数字到字母的映射与电话按键相同，注意1不对应任何字母。

1   ，2abc，3def
4ghi，5jkl，6mno
7pqrs，8tuv，9wxyz

输入："23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

说明：尽管上面是按照字典排序的，但是实际可以以任何顺序进行输出

解题思路，如果输入234，
那么先计算23，然后将23的结果跟4再进行组合。利用递归。

 */

export default (str) => {
    // map 按键和字母的映射，按键是索引值，所以第0位和第1位都没对应字母。
    let map = [0, 0, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 输入的数字拆分成数组
    let inputs = str.split('')
    // codes存储所有要排列组合的字符串
    let codes = []
    inputs.forEach(item => {
        if (map[item]) {
            codes.push(map[item])
        }
    })
    // codes [ 'abc', 'def', 'ghi' ]
    let result = []
    // 递归所有要排列组合的字符串
    function comb(arr) {
        let tmp = []
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        // tmp是前两项的排列组合
        /* 
        [
            [
            'ad', 'ae', 'af',
            'bd', 'be', 'bf',
            'cd', 'ce', 'cf'
            ],
            'ghi'
        ]
        用splice方法，将arr逐步合并前两项的排列组合
        一开始的'abc'可以看作[a,b,c]
        */
        arr.splice(0,2,tmp)
        /* 
        如果递归到最后一次合并，那么arr就会变成
        [
            ['xx','xx'......]
        ]
        那么arr的长度就只有1，只要arr的长度大于1就进行递归合并前两项的排列组合
        */
        if(arr.length === 1){
            result = tmp
        }else{
            comb(arr)
        }
    }
    comb(codes)
    return result
}

/* 
知识点
Array.prototype.splice：用于添加或删除数组中的元素，这种方法会改变原始数组
*/