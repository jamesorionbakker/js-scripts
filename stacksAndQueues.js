class Stack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        this.stack.push(data);
        return this.stack;
    }
    pop(num = 1) {
        if (num === 1) {
            return this.stack.pop();
        }
        let responseArray = []
        if (num > 1) {
            while (num > 0 && this.stack.length > 0) {
                responseArray.push(this.stack.pop())
                num--;
            }
            return responseArray;
        }
    }
}
let stack = new Stack;

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(data) {
        this.queue.push(data);
        return this.queue;
    }
    dequeue(num = 1) {
        if (num === 1) {
            return this.queue.shift();
        }
        let responseArray = []
        if (num > 1) {
            while (num > 0 && this.queue.length > 0) {
                responseArray.push(this.queue.shift())
                num--;
            }
            return responseArray;
        }
    }
}
let queue = new Queue;

class QueueWeighted { //Weighted queue, higher weight takes priority over lower weight
    constructor() {
        this.queue = [];
    }
    enqueue(data, weight = 0) {
        let newItem = {
            data: data,
            weight: weight
        }
        if (this.queue.length === 0) {
            this.queue.push(newItem);
            return this.queue;
        } else {
            if (newItem.weight > this.queue[0].weight) {
                this.queue.unshift(newItem);
                return this.queue;
            }
            if (newItem.weight <= this.queue[this.queue.length - 1].weight){
                this.queue.push(newItem);
                return this.queue;
            }
            for (let i = this.queue.length - 1; i >= 0; i--) {
                
                let current = this.queue[i];
                if (newItem.weight > current.weight) {
                    continue;
                } else {
                    this.queue.splice(i + 1, 0, newItem);
                    return this.queue;
                }
            }
        }
    }
    dequeue(num = 1) {
        if (num === 1) {
            return this.queue.shift();
        }
        let responseArray = []
        if (num > 1) {
            while (num > 0 && this.queue.length > 0) {
                responseArray.push(this.queue.shift())
                num--;
            }
            return responseArray;
        }
    }
}
let queueWeighted = new QueueWeighted;

