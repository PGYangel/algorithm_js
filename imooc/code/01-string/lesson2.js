/**
2、计数二进制子串
给定一个字符串s，计算具有相同数量0和1的非空（连续）子字符串的数量，
并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

输入："00110011"
输出：6
解释：有6个子串具有相同数量的连续1和0：
"0011"，"01"，"1100"，"10"，"0011"，"01"

请注意，这些重复出现的子串要计算出它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起
*/

export default (str) => {
  // 根据传入目标字符串，匹配有无，有则返回true,无则返回false
  function match(target) {
    // 找到第一组只有一个数的项是什么
    let s = target.match(/^(0+|1+)/g)[0]
    // 根据第一组的长度进行截取下一组数据
    let next = target.slice(s.length, s.length * 2)
    // 看下一组数据是否只存在一个数字，如果有多个数据就会分成多个数组，跟第一组不匹配
    let num = next.match(/(0+|1+)/g)
    if (num != null && num.length === 1) {
      return true
    } else {
      return false
    }
  }
  let result = 0
  // 字符串逐一递减匹配，找到第一个符合的则计数加1
  for (let i = 0; i < str.length - 1; i++) {
    let r = match(str.slice(i))
    if (r) {
      result++
    }
  }
  return result
}

/* 
知识点
String.prototype.slice(start, end)：可提取字符串的某个部分，并以新的字符串返回被提取的部分。

复杂问题进行分工抽象，每个方法只做一件事情，最终合并输出结果。
*/