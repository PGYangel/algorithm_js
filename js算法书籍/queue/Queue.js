function Queue() {
    var items = [];
    /**
     * enqueue(element)
     * @param element：添加的新元素
     * 这个方法负责向队列添加新元素。这里有一个非常重要的细节，新的项只能添加到队列末尾。
     * **/
    this.enqueue = function(element){
        items.push(element);
    };
    /**
     * dequeue()
     * 从队列移除项。由于队列遵循先进先出原则，最先添加的项也是最先被移除的。
     * **/
    this.dequeue = function(){
        return items.shift();
    };
    /**
     * front()
     * 查看队列头元素，返回队列最前面的项
     * **/
    this.front = function(){
        return items[0];
    };
    /**
     * isEmpty()
     * 队列为空，它会返回true，否则返回false
     * **/
    this.isEmpty = function(){
        return items.length == 0;
    };
    /**
     * size()
     * 获取队列长度
     * **/
    this.size = function(){
        return items.length;
    };
    /**
     * print()
     * 打印队列元素
     * **/
    this.print = function(){
        console.log(items.toString());
    };
}
