// class DoublyLinkedList {
//     constructor(array) {
//         let myID;
//         if (array.length < 1) {
//             return 'array is empty';
//         }
//         array.forEach((item, i) => {
//             myID = [array[i].id]
//             this[myID] = array[i];
//             if (i > 0) {
//                 this[myID].previous = array[i - 1].id;
//             }
//             if (i + 1 < array.length) {
//                 this[myID].next = array[i + 1].id;
//             }
//         })
//         this.first = array[0].id;
//         this.last = array[array.length - 1].id;
//     }

//     print(id = this.first) {
//         if (!this.first) {
//             return 'List is empty';
//         }
//         let my = this[id];
//         let response = my.id + ', ';
//         if (my.next) {
//             response += this.print(my.next);
//         }
//         return response;
//     }

//     delete(id) { //SHOULD not have to nest if sttements
//         let my = this[id];
//         if (this.first !== this.last) {
//             if (my.id === this.first) {
//                 this.first = my.next;
//                 this[my.next].previous = null
//             } else if (my.id === this.last) {
//                 this.last = my.previous;
//                 this[my.previous].next = null
//             } else {
//                 this[my.previous] = my.next;
//                 this[my.next] = my.previous;
//             }
//         } else {
//             this.first = null;
//             this.last = null;
//         }
//         delete this[my.id];
//     }

//     search(query, id = this.first) { //SHOULD BE DONE WITHOUT RECURSION

//         let my = this[id];
//         if (query === my.id) {
//             return my.data;
//         } else if (my.next) {
//             return this.search(query, my.next);
//         } else {
//             return 'not found';
//         }
//     }
// }

let dll = new class DLL {
    constructor(){
        this.first = null;
        this.last = null;
    }
    insertAfter(data,id=first){
        if(!this.hasOwnProperty(id)){
            return 'reference does not exist'
        }
        let newNode = new Node(value)
        let prevNode = (this[id] !== this.first) ? this[id] : null
        let nextNode = (this[id]?.next) ? this[id.next] : null
        if(prevNode){
            prevNode.next = newNode;
            newNode.previous = prevNode;
        }
        if(nextNode){
            nextNode.previous = newNode;
            newNode.next = nextNode;
        }
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

let array = []

for (let i = 0; i < 300; i++) {
    array.push(new Item(getUniqueId(), `I am number ${i+1}`));
}

function getUniqueId() {
    return `${Date.now() - 1000000000000}${Math.floor((Math.random() * 1000))}${Math.floor((Math.random() * 1000))}`;
}

let myList = new DoublyLinkedList(array);
console.log(myList.print());
