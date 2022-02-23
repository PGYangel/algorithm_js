/* 
正则表达式匹配

给定一个字符串s和一个字符模式p，实现支持'.'和'*'的正则表达式匹配。

'.' 匹配任意单个字符。
'*' 匹配零个或多个前面的元素。

匹配应该覆盖整改字符串s，而不是部分字符串。

说明：
    s 可能为空，且只包含从 a-z 的小写字母
    p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *

输入：
s = "mississippi"
p = "mis*is*p*."
输出：false

无模式：mi 一一对比
有模式：s* .*或[a-z]*或abcd

*/

export default (s, p) => {
    let isMatch = (s, p) => {
        // 边界情况，如果s和p都为空，说明处理结束了，返回true，否则返回false
        if (p.length <= 0) {
            return !s.length
        }
        // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
        let match = false
        if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
            match = true
        }
        // p有模式的
        if (p.length > 1 && p[1] === '*') {
            // 第一种情况：s*匹配0个字符
            // 第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s
            return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
        } else {
            return match && isMatch(s.slice(1), p.slice(1))
        }
    }
    return isMatch(s, p)
}