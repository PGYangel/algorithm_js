/**
1、反转字符串中的单词
给定一个字符串，反转字符串每个单词的字符顺序，
同时保留空格和单词的初始顺序。

输入： "Let's take LeetCode contest"
输出： "s'teL ekat edoCteeL tsetnoc"
在字符串中，每个单词由一个空格分隔，并且字符串中不会有任何额外的空格
 */

export default (str) => {
  let result = ''
  // 第一种写法：根据空格拆分字符串为数组
  let arr = str.split(' ')
  // 第二种写法：使用正则，考察split可以使用正则
  // let arr = str.split(/\s/g)
  // 第三种写法：使用match方法，match 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
  // let arr = str.match(/[\w']+/g)

  let reverse = arr.map((item) => {
    // 将每组字符串以每个字符拆分成数组，然后颠倒数组，最终将颠倒的数组join成一个字符串
    return item.split('').reverse().join('')
  })
  // 最后再将颠倒后单词数组再以空格拼接成字符串
  result = reverse.join(' ')
  return result
}

// // 优雅的写法
// export default (str) => {
//   return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

/* 
知识点：
String.prototype.split：字符串拆分成数组
String.prototype.match：字符串匹配正则
Array.prototype.map：数组map方法循环的使用
Array.prototype.reverse：反转数组API的使用
Array.prototype.join：拼接数组的使用

熟悉基础API，并实践到具体应用场景
*/