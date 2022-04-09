class Stack {

   constructor(){
      this.stack = [];
   } 

   push(value){
     
    this.stack.push(value);

   }

   pop(){
    if(this.stack.length <= 0){
        return null;
    }
    this.stack.pop();
   }
   
   peek(){
    return this.stack
   }


}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack)