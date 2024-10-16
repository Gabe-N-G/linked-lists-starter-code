class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
    }
}

/*
 this.data = (key)
 data = value

 to connect nodes

 const firstNode = new Node(10)
 const secondNode= new Node(5)
 firstNode.next = secondNode

*/

class LinkedList{
    constructor(){
        this.head = null
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data){
        const node = new Node(data);
        //creates a new node with data passed down
        if (!this.head){
            //iof there is no head, makes the next node the head
            this.head = node
            return
        } else {
            let walker = this.head
            //walker tracks the node we want to attach things to
            while (walker.next){
                walker = walker.next
                //until there is nothing, walker traverses till the end of the list.
            }
            walker.next = node
            //we add the new node to the end of walker.
            return
        }
    }
    prependNode(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node
            return
        } else {
            let oldHead = this.head
            this.head = node
            node.next = oldHead 
        return
        }
        // creates a new node with the given data and adds it to the front of the list
    }
    pop(){
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}