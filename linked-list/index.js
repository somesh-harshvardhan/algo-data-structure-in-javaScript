
//  200-->5-->10-->40
// Singly Linked List
class SinglyLinkedList {
   
    constructor(value){
         
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head;
        this.length = 1;

    }

    append(value){
       
    const newNode = {

        value : value,
        next : null
    }
    
    this.tail.next = newNode;
    this.tail=newNode;
    this.length++;
    }
    
    prepend(value){

     const newNode = {
         value : value,
         next : null
     }
     newNode.next = this.head;
     this.head = newNode;
     this.length++


    }
    printList(){
       let array = [];

       let currentNode = this.head;

       while(currentNode !== null){
            array.push(currentNode.value)
           currentNode = currentNode.next
       }

       return array
    }
    insert(index,value){

    
       if(index > this.length || index < 0){
           return  console.log("enter valid index")
       }
       const newNode = {
        value : value,
        next : null
        }
       
        const leader = this.traverseToIndex(index - 1);

        const holdingPointer = leader.next;
       
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
       
    }

    remove(index){
       
        if(index > this.length || index < 0){
            return  console.log("enter valid index")
        }
        
        const leader = this.traverseToIndex(index-1);

        const pawn = leader.next;
        
        const ahead = pawn.next;

        leader.next = ahead;
        this.length--

    }
    
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next
            counter ++
        }
        return currentNode
    }

}

const list = new SinglyLinkedList(200);
list.append(5)
list.append(10)
list.prepend(40)
list.insert(2,420)
list.insert(2,69)
list.remove(2)
// console.log(list.printList())



// Doubly Linked List 

class NewNode {
    constructor(value){
        this.value = value;
        this.next =null ;
        this.previous = null;
    }
}

class DoublyLinkedList{

    constructor(value){

        const newNode =new NewNode(value) 
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
       
        const newNode = new NewNode(value);
        
        newNode.previous = this.tail;
        this.tail.next = newNode;

        this.tail = newNode
    
       
        
        this.length++

    }
    prepend(value){

        const newNode = new NewNode(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++
        
        
    }

    printList(){

        let array = [];
         let currentNode = this.head;
        while(currentNode !== null){
             
            array.push(currentNode.value);
            currentNode = currentNode.next;

        }
        return array;
    }
     
    insert(index,value){
       

        const newNode = new NewNode(value);
        
        const leader = this.traverseToIndex(index - 1);

        const holdPoint = leader.next;

        leader.next = newNode;
        newNode.previous = leader;

        newNode.next = holdPoint;
        holdPoint.previous = newNode;
        
        this.length++

    }
    traverseToIndex(index){
      
        let currentNode = this.head;
        let counter = 0;
        while (counter < index){
          
            currentNode = currentNode.next
            counter++
        }
        
        return currentNode;

    }
    traverseBackwards(){
      
        let array = [];

        let currentNode = this.tail;
        let counter = this.length - 1;


        while(counter >= 0){

            array.push(currentNode.value);
            currentNode = currentNode.previous
            counter--
        }

        return array

    }
}

const doubleList = new DoublyLinkedList(20);
doubleList.append(30)
doubleList.append(40)
doubleList.prepend(10)
doubleList.insert(1,60)
console.log(doubleList.printList())
console.log(doubleList.traverseBackwards())