'use strict'

class Node {
    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }
    readMin() {
        return this.heap[1]
    }
    queue(val) {
        let heap = this.heap;
        heap.push(val);
        let current = heap.length - 1;
        let parent = Math.floor(current / 2);
        while (heap[parent] && heap[parent] > heap[current]) {
            [heap[current], heap[parent]] = [heap[parent], heap[current]];
            current = parent;
            parent = Math.floor(current / 2);
        }
        return heap;    
    }
    dequeue() {
        let heap = this.heap;
        [heap[1], heap[heap.length -1]] = [heap[heap.length -1], heap[1]];
        let response = heap.pop();  

        let current = 1;
        let left = current * 2;
        let right = left + 1;

        while (heap[current] > heap[left] || heap[current] > heap[right]) {
            let smallerChild = (heap[left] > heap[right]) ? right : left;
            [heap[smallerChild], heap[current]] = [heap[current], heap[smallerChild]];
            current = smallerChild;
            left = current * 2;
            right = left + 1;
        }
        return response;
    }
    buildNodeTree(index = 1) {
        if (index < this.heap.length) {
            let currentNode = new Node;
            currentNode.value = this.heap[index];
            let leftChild = index * 2;
            let rightChild = (index * 2) + 1;
            if (leftChild < this.heap.length) {
                currentNode.left = this.buildNodeTree(leftChild);
            }
            if (rightChild < this.heap.length) {
                currentNode.right = this.buildNodeTree(rightChild);
            }
            return currentNode;
        }
    }
    buildHtmlList(index = 1) {
        if (index < this.heap.length) {
            let output = '<li>' + this.heap[index] + '</li>'
            let leftChild = index * 2;
            let rightChild = (index * 2) + 1;
            output += '<ul>';
            if (rightChild < this.heap.length) {
                output += this.buildHtmlList(rightChild);
            }
            if (leftChild < this.heap.length) {
                output += this.buildHtmlList(leftChild);
            }
            output += '</ul>';
            return output;
        }
    }
}
let heap = new MinHeap;

let num;
for (let i = 0; i < 31; i++) {
    num = Math.floor(Math.random() * 100);
    heap.queue(num);
}
console.log(heap.heap)

function print() {
    document.body.innerHTML = `<ul>${heap.buildHtmlList()}</ul>`
}
print();