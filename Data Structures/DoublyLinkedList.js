class DoublyLinkedList {
    constructor(array) {
        let myID;
        if (array.length < 1) {
            return 'array is empty';
        }
        array.forEach((item, i) => {
            myID = [array[i].id]
            this[myID] = array[i];
            if (i > 0) {
                this[myID].previous = array[i - 1].id;
            }
            if (i + 1 < array.length) {
                this[myID].next = array[i + 1].id;
            }
        })
        this.first = array[0].id;
        this.last = array[array.length - 1].id;
    }

    print(id = this.first) {
        if (!this.first) {
            return 'List is empty';
        }
        let my = this[id];
        let response = my.id + ', ';
        if (my.next) {
            response += this.print(my.next);
        }
        return response;
    }

    delete(id) {
        let my = this[id];
        if (this.first !== this.last) {
            if (my.id === this.first) {
                this.first = my.next;
                this[my.next].previous = null
            } else if (my.id === this.last) {
                this.last = my.previous;
                this[my.previous].next = null
            } else {
                this[my.previous] = my.next;
                this[my.next] = my.previous;
            }
        } else {
            this.first = null;
            this.last = null;
        }
        delete this[my.id];
    }

    search(query, id = this.first) {

        let my = this[id];
        if (query === my.id) {
            return my.data;
        } else if (my.next) {
            return this.search(query, my.next);
        } else {
            return 'not found';
        }
    }
}

class Item {
    constructor(id, data) {
        this.id = id;
        this.data = data;
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
