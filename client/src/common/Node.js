class Node {
    data = {};
    next = null;
    
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
export default Node;