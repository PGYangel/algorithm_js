let Stack = (function () {
    const items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []);
        }

        /**
         * push(element)
         * @param element：添加的新元素
         * 这个方法负责往栈里添加新元素，有一点很重要：该方法只添加元素到栈顶，也就是栈的末尾。
         * **/
        push(element) {
            let s = items.get(this);
            s.push(element);
        }

        /**
         * pop()
         * 这个方法主要用来移除栈里的元素。栈遵从LIFO原则，因此移出的是最后添加进去的元素。
         * **/
        pop = function () {
            let s = items.get(this);
            return s.pop();
        };
        /**
         * peek()
         * 查找最后添加的元素是什么，返回栈顶的元素。
         * **/
        peek = function () {
            let s = items.get(this);
            return s[s.length - 1];
        };
        /**
         * isEmpty()
         * 检查栈是否为空，如果栈为空的话将返回true，否则就返回false：
         * **/
        isEmpty = function () {
            let s = items.get(this);
            return s.length == 0;
        };
        /**
         * size()
         * 返回栈里的元素个数
         * **/
        size = function () {
            let s = items.get(this);
            return s.length;
        };
        /**
         * clear()
         * 移除栈里所有的元素
         * **/
        clear = function () {
            let s = items.get(this);
            s = [];
        };
        /**
         * print()
         * 把栈里的元素都输出到控制台
         * **/
        print = function () {
            let s = items.get(this);
            console.log(s.toString());
        };
    }

    return Stack;
})();
