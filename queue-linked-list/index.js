
// my way
class Node {
    constructor(value){
       this.value = value;
       this.next = null;

    }
}

class Queue {

  constructor(){
     
    this.first = null;
    this.last = null;
    this.length = 0;

  }
  enqueue(value){
     
    const node = new Node(value);
    this.length++
    if(this.length === 1){
      
        this.first = node;
        this.last = node

    }else{
       
        node.next = this.last;
        this.last = node;

    }
  }

  peek(){
      return this
  }
  dequeue(){
      if(this.length === 0 ){
         return null;
     }
     if(this.length > 1){
        let secondLastNode = this.getSecondLastNode();
        secondLastNode.next = null;
        this.first = secondLastNode;
        
     }else{
         this.first = null;
         this.last = null
     }
     
     this.length--

  }
  getSecondLastNode(){
      let currentNode = this.last;
      let temp ;//to keep the previous node value 
      while(currentNode.next !== null){
          temp = currentNode;
          currentNode = currentNode.next;
      }
      
      return temp;
     
  }
  getValues(){

      let currentNode = this.last;
       let array = [];
       while(currentNode !== null){
           array.push(currentNode.value);
           currentNode = currentNode.next;
       }
       return array
  }

}

const q = new Queue();

q.enqueue(12);
q.enqueue(13);
q.enqueue(14);
q.enqueue(15);
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
// ///////////

// simpler play

class Q{

  constructor(){
     this.first =  null;
     this.last = null;
     this.length = 0
  } 

  enqueue(value){
     const node = new Node(value);
     this.length++
    if(this.length === 1){

      this.first = node;
      this.last = node

    }else{

     this.last.next = node;
     this.last = node;

    }

      
  }

  dequeue(){
     
    if(!this.first){
        return null;
    }
    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;
    this.length--
     

  }
  peek(){
      return this
  }
  getValues(){

    let currentNode = this.first;
     let array = [];
     while(currentNode !== null){
         array.push(currentNode.value);
         currentNode = currentNode.next;
     }
     return array
}

}

const que = new Q();

que.enqueue(12);
que.enqueue(14);
que.enqueue(18);

que.dequeue();



console.log(que.getValues())
