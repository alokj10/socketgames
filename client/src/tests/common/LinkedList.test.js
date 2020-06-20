import LinkedList from "../../common/LinkedList"

describe('Linked list tests', () => {
    test('create linked list object', () => {
        let ll = new LinkedList();
        expect(ll.head).toBe(null);
        expect(ll.size).toBe(0);
    })

    test('insert node to head', () => {
        let ll = new LinkedList();
        let data = {
            position: 'B1'
        }
        ll.InsertToHead(data);
        expect(ll.head.data.position).toBe('B1');
        expect(ll.head.next).toBeNull();
        expect(ll.size).toBe(1);
    })

    test('insert node to tail when empty, sets head', () => {
        let ll = new LinkedList();
        let data = {
            position: 'B1'
        }
        ll.InsertToTail(data);
        expect(ll.head.data.position).toBe('B1');
        expect(ll.head.next).toBeNull();
        expect(ll.size).toBe(1);
    })

    test('insert tail node, changes head of linked list', () => {
        let ll = new LinkedList();
        let node1 = { position: 'B1' };
        let node2 = { position: 'B2' };
        let node3 = { position: 'B3' };
        ll.InsertToTail(node1);
        ll.InsertToTail(node2);
        ll.InsertToTail(node3);

        expect(ll.head.data.position).toBe('B1');
        expect(ll.head.next.data.position).toBe('B2');
        expect(ll.head.next.next.data.position).toBe('B3');
        expect(ll.size).toBe(3);
        ll.Print();
    })
})