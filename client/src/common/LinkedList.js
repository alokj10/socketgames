import Node from "./Node";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    InsertToHead = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
    }

    InsertToTail = (data) => {
        let tail = null;
        let node = new Node(data);

        if(!this.head) {
            this.head = node;
        }
        else {
            tail = this.head;
            while(tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.size++;
    }

    Next = (position) => {
        let tail = this.head;
        while(tail.next) {
            if(tail.data.position === position) {
                console.log('next in ll', tail.next);
                return tail.next;
            }
            tail = tail.next; 
        }
        console.log('next always null');
        return null;
    }

    Print = () => {
        let tail = this.head;
        while(tail) {
            console.log(tail.data.position);
            tail = tail.next;
        }
    }
}
export default LinkedList;