class Node {

   constructor(value){
      this.value = value;
      this.next = null;

   }

}

class Stack {
    
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;

    }

    push(value){
        let node = new Node(value);
        this.length++;
        if(this.length === 1){
          this.top = node;
          this.bottom= node;
       }else{
         node.next = this.top;
         this.top = node;
       }
 
    }

    peek(){
     
        
        return this.top

    }
    getValue(){
        let currentNode = this.top;
        let array = [];

        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        
        return array;
    }
    pop(){
        if(!this.top ){
           
            return null

        }
       if(this.top === this.bottom){
           this.bottom = null
       }
       let currentNode = this.top;
       let nextNode = currentNode.next;   
       this.top = nextNode;
       this.length--;
    }


}

const stack = new Stack();

stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
stack.pop()


console.log(stack.bottom)