class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
let bst = new class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        let current = this.root;
        let left = (current?.left) ? current.left : null;
        let right = (current?.right) ? current.right : null;
        while (current) {
            current = (newNode.value <= current.value) ? left : right;
            left = (current?.left) ? current.left : null;
            right = (current?.left) ? current.right : null;
        }
        current = newNode;
        return current;
    }

    search(value) {
        let tree = this.tree;
        let current = 1;
        let left = current * 2;
        let right = left + 1;
        console.log('looping');
        while (tree[current]) {
            if (tree[current] === value) {
                return current;
            }
            current = (value <= tree[current]) ? left : right;
            left = current * 2;
            right = left + 1;
        }
        return false;
    }
    delete(val) {
        let tree = this.tree
        let index = bst.search(val);
        if (!index) {
            return false;
        }
        let response = tree[index];
        let current = index;
        let left = current * 2;
        let right = left + 1;
        if (tree[right]) {
            current = right;
            left = current * 2;
            right = left + 1;
        }
        while (tree[left]) {
            current = left;
            left = current * 2;
            right = left + 1
        }
        if (tree[right]) {
            console.log('it failed');
        }
        tree[index] = tree[current];
        tree[current] = null;
        print();
        return response;
    }
    buildHtmlList(index = 1) {
        if (index < this.tree.length) {
            let returnVal = (this.tree[index] === undefined) ? 'null' : this.tree[index];
            let output = '<li>' + returnVal + '</li>'
            let leftChild = index * 2;
            let rightChild = (index * 2) + 1;
            output += '<ul>';
            if (rightChild < this.tree.length) {
                output += this.buildHtmlList(rightChild);
            }
            if (leftChild < this.tree.length) {
                output += this.buildHtmlList(leftChild);
            }
            output += '</ul>';
            return output;
        }
    }
}
bst.insert(250);
for (let i = 0; i < 10; i++) {
    bst.insert(Math.floor(Math.random() * 500));
}
console.log(bst);
