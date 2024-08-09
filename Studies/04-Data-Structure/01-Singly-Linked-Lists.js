/*   
### WHAT IS A LINKED LIST? ###

* A data structure that contains a head, tail and length property.
* Linked Lists consist of nodes, and each node has a value and
a pointer to another node or null.

### Comparisons with Arrays ###

Lists:
* Do not have indexes!
* Connected via nodes with a next pointer.
* Random access is not allowed.

Arrays:
* Indexed in order!
* Insertion and deletion can be expensive.
* Can quickly be accessed at a specific index.
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if(!this.head) return undefined;

        let current = this.head;
        this.head = current.next;

        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.head;
            this.head = newNode;
            newNode.next = current;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val)
        
        const newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length) return !!this.pop();
        if (index === 0) return !!this.shift();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;

        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null
        
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList()

list.push('Hello');
list.push('World');
list.push('!!!');
list.push('Heeey');
list.unshift('Bro');
list.set(2, 'Mundo');
list.get(2);
list.insert(0, 'FIRSTT');
console.log(list);