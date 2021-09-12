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
    // map 按键和字母的映射，按键是索引值，所以第0位和第1位都没对应字母用对应数字即可。
    let map = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let inputs = str.split('')
    let result = []
    // 递归方法，输入两个集合输出两个集合的排列组合
    function recur(arr1, arr2) {}
    return result
}