class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        if (Array.isArray(value)) {
            value.forEach((value) => {
                this.insert(value);
            })
            return this.root;
        }
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }
        let current = this.root;
        while (current) {
            if (current.value === value) {
                return undefined;
            }
            if (current.value > value) {
                if (current.left === null) {
                    newNode.parent = current;
                    current.left = newNode;
                    return this.root;
                }
                current = current.left;

            } else {
                if (current.right === null) {
                    newNode.parent = current;
                    current.right = newNode;
                    return this.root;
                }
                current = current.right;
            }
        }
    }
    
    find(value) {
        if (value == undefined) {
            return undefined
        };
        if (!this.root) {
            return undefined
        };

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (current.value > value) {
                current = current.left;
                continue;
            }
            if (current.value < value) {
                current = current.right;
                continue;
            }
            if (current.value === value) {
                found = true;
                return current;
            }
        }
        return undefined;
    }
    
    print(value) {
        let startNode;
        if (value == undefined) {
            startNode = this.root;
        } else {
            startNode = this.find(value);
        }
        return this.recursPrint(startNode);
    }
    
    recursPrint(node) {
        let response = [];
        if (node.left) {
            response = response.concat(this.recursPrint(node.left));
        }
        response = response.concat(node.value);
        
        if (node.right) {
            response = response.concat(this.recursPrint(node.right));
        }
        return response;
    }
    
    getChildren(node) {
        let response = [];
        if (node.left) {
            response = response.concat(this.recursPrint(node.left));
        }
        response = response;
        if (node.right) {
            response = response.concat(this.recursPrint(node.right));
        }
        return response;
    }
    
    delete(value) {
        let node;
        if (value == undefined) {return};
        
        node = this.find(value);
        
        if (node === undefined) {return};

        let children = this.getChildren(node);

        if (node.parent) {
            let parent = node.parent;
            if (node.value < parent.value) {
                parent.left = null;
            } else {
                parent.right = null;
            }
            while (children.length > 0) {
                this.insert(children.pop());
            }
        } else {
            this.root = null;
            children.forEach((node) => {
                this.insert(node.value);
            })
        }
        return this.root;
    }
    optimize(){
        let array = mergeSort(this.print());
        this.root = null;
        let middle = Math.floor(array.length / 2);
        this.insert(parseInt(array.splice(middle, 1)));
        this.insert(array);
        return this.root;
    }
}

let bst = new BinarySearchTree; //instantiate tree

function mergeSort(arr) { //merge sort function to sort array
    if (arr.length > 1) {
        let middle = Math.floor(arr.length / 2);
        let l = arr.slice(0, middle);
        let r = arr.slice(middle, arr.length);

        l = mergeSort(l);
        r = mergeSort(r);

        let i = 0,
            j = 0,
            k = 0;
        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) {
                arr[k] = l[i];
                i++
            } else {
                arr[k] = r[j];
                j++;
            }
            k++;
        }
        while (i < l.length) {
            arr[k] = l[i];
            i++;
            k++;
        }
        while (j < r.length) {
            arr[k] = r[j];
            j++;
            k++;
        }
    }
    return arr;
}

function searchArray(searchArray, arrayToSearch) { //array search function
    for (let i = 0; i < searchArray.length; i++) {
        for (let j = 0; j < arrayToSearch.length; j++) {
            if (searchArray[i] === arrayToSearch[j]) {
                break;
            }
        }
    }
}


let array = []; //instantiate new array
let itemsToSearch = 30000 //number of items to search

for (let i = 0; i < itemsToSearch; i++) { //generate random numbers
    let random = Math.floor(Math.random() * 1000);
    array.push(random); //push random numbers to array
    bst.insert(random); //insert random numbers in tree
}

let sortedArray = mergeSort(array); //sort array to randomize search sequence

// search array for every item in sortedArray.  Expected runtime is O(n^2)
let startTime = Date.now();
searchArray(sortedArray, array);
let searchTime = Date.now() - startTime;
console.log(`it took ${searchTime}ms to to search for ${array.length} item in an unsorted array`);

// search binary search tree for every item in soretedArray.  Expected runtime is O(logN)
startTime = Date.now();
sortedArray.forEach((value) => {
    bst.find(value);
})
searchTime = Date.now() - startTime;
console.log(`it took ${searchTime}ms to to search for ${array.length} item in a binary BinarySearchTree`);

console.log(bst.root)
