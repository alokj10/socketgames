import Node from "../../common/node"

describe('Test Node', () => {
    test('create node', () => {
        let data = {
            position: 'B1' 
        }
        let node = new Node(data);
        expect(node.data.position).toBe('B1');
    });

    test('set next node', () => {
        let node1 = new Node({ position: 'B1' });
        let node2 = new Node({ position: 'B2' });
        node1.next = node2;
        expect(node1.next.data.position).toBe('B2');
    })

    test('set next node to null', () => {
        let node1 = new Node({ position: 'B1' });
        expect(node1.next).toBe(null);
    })
})