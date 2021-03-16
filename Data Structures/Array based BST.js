let bst = new class BinarySearchTree {
    constructor(){
        this.tree = [null];
    }
    insert(newValue){
        let tree = this.tree
        let current = 1;
        let left = current * 2;
        let right = left + 1;
        while(tree[current]){
            current = (newValue <= tree[current]) ? left : right;
            left = current * 2;
            right = left + 1;
        }
        tree[current] = newValue;
        return tree[current];
    }
    delete(){

    }
    search(){

    }
}

for(let i=0; 1 < 100; i++){
    bst.insert(Math.floor(Math.random));
}


