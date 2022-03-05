/* 
栈的核心是先进后出


棒球比赛

你现在是棒球比赛记录员
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
2.“+”（一轮的得分）：表示本轮获得的得分是前两轮 有效 回合得分的总和
3.“D”（一轮的得分）：表示本轮获得的得分是前一轮 有效 回合得分的两倍
4.“C”（一个操作，这不是一个回合的分数）：表示您获得的最后一个 有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

示例1：
输入：["5","2","C","D","+"]
输出：30
解释：
第1轮，你可以得到5分，总和是5
第2轮，你可以得到2分，总和是7
操作1，第二轮的数据无效，总和是5
第3轮，你可以得到10分（第2轮的数据已被删除），总和是15
第4轮，你可以得到5+10=15分，总和是30

*/
export default (arr) => {
    // 用数组来实现堆栈结构，pop,push方法做进栈和出栈操作
    let result = []
    let pre1 = null // 上一项
    let pre2 = null // 上上一项
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break
            case 'D':
                if (result.length) {
                    // 利用pop获取上一项
                    pre1 = result.pop()
                    // 因为上一项被移除，所以后面要加回去
                    result.push(pre1, pre1 * 2)
                }
                break
            case '+':
                if (result.length) {
                    pre1 = result.pop()
                    pre2 = result.pop()
                    // 栈结构是先进后出，恢复原理就要后出先进
                    result.push(pre2, pre1, pre1 + pre2)
                }
                break
            default:
                // 
                result.push(item * 1)
        }
    })
    // 用reduce累加数组里的值
    return result.reduce((total, num) => total + num)
}