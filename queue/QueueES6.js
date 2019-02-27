let Queue = (function () {
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(this, []);
        }
        /**
         * enqueue(element)
         * @param element：添加的新元素
         * 这个方法负责向队列添加新元素。这里有一个非常重要的细节，新的项只能添加到队列末尾。
         * **/
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        /**
         * dequeue()
         * 从队列移除项。由于队列遵循先进先出原则，最先添加的项也是最先被移除的。
         * **/
        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
        /**
         * front()
         * 查看队列头元素，返回队列最前面的项
         * **/
        front = function(){
            let q = items.get(this);
            return q[0];
        };
        /**
         * isEmpty()
         * 队列为空，它会返回true，否则返回false
         * **/
        isEmpty = function(){
            let q = items.get(this);
            return q.length == 0;
        };
        /**
         * size()
         * 获取队列长度
         * **/
        size = function(){
            let q = items.get(this);
            return q.length;
        };
        /**
         * print()
         * 打印队列元素
         * **/
        print = function(){
            let q = items.get(this);
            console.log(q.toString());
        };
    }
    return Queue;
})();
