class Node {
    constructor(){
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    getMin() {
        return this.heap[1]
    }

    insert(val) {
        this.heap.push(val);
        if(this.heap.length > 1){
            let current = this.heap.length -1

            while(current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]){
                let small = this.heap[Math.floor(current/2)];
                this.heap[Math.floor(current/2)] = this.heap[current];
                this.heap[current] = small;
                current = Math.floor(current/ 2);
            }
        }
        return this.heap;
    }
    dequeue(){
        if(this.heap.length <= 1){
            return;
        }
        if(this.heap.length === 2){
            return this.heap.splice(1,1);
        }
        if(this.heap.length > 2){
            let min = this.heap[1]; //save min for return at end of block
            this.heap[1] = this.heap.pop();
            
            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return min;
            }

            let current = 1
            let leftChild = current * 2;
            let rightChild = current * 2 + 1;
            console.log(this.heap[rightChild]);
            while(this.heap[leftChild] !== undefined && this.heap[rightChild] !== undefined && (this.heap[current] > this.heap[leftChild] || this.heap[current] > this.heap[rightChild])){
                if(this.heap[leftChild] < this.heap[rightChild]){
                    [this.heap[current], this.heap[leftChild]] = [this.heap[leftChild], this.heap[current]];
                    current = leftChild;
                }
                else {
                    [this.heap[current], this.heap[rightChild]] = [this.heap[rightChild], this.heap[current]];
                    current = rightChild;
                }
                leftChild = current * 2;
                rightChild = current * 2 + 1;
            }
            if(this.heap[rightChild] === undefined && this.heap[current] > this.heap[leftChild]){
                [this.heap[current], this.heap[leftChild]] = [this.heap[leftChild], this.heap[current]];
            }
            return min;
        } 
    }
    buildNodeTree(index=1) {
        if(index < this.heap.length){
            let currentNode = new Node;
            currentNode.value = this.heap[index];
            let leftChild = index * 2;
            let rightChild = (index * 2) + 1;
            if(leftChild < this.heap.length){
                currentNode.left = this.buildNodeTree(leftChild);
            }
            if(rightChild < this.heap.length){
                currentNode.right = this.buildNodeTree(rightChild);
            }
            return currentNode;
        }
    }
    buildHtmlList(index=1) {
        if(index < this.heap.length){
            let output = '<li>' + this.heap[index] + '</li>'
            let leftChild = index * 2;
            let rightChild = (index * 2) + 1;
            output += '<ul>';
            if(rightChild < this.heap.length){
                output += this.buildHtmlList(rightChild);
            }
            if(leftChild < this.heap.length){
                output += this.buildHtmlList(leftChild);
            }
            output += '</ul>';
            return output;
        }
    }
}
let heap = new MinHeap;

let num;
for(let i=0; i<31; i++){
    num = Math.floor(Math.random() * 100);
    heap.insert(num);
}

console.log(heap.heap)

function print(){
    document.body.innerHTML = `<ul>${heap.buildHtmlList()}</ul>`
}
print();