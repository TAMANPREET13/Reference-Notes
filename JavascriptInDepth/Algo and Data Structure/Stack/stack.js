class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  //Return and remove top element in the stack
  //Return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //Check top element in stack
  peek() {
    console.log(`Top Element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  //Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }

  //Check size of stack
  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }

  // Print elements in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + "\n";
    }
    return str;
  }

  //clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`stack cleared`);
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);

stack.isEmpty();
stack.peek();

stack.push(300);
console.log(stack.print());

stack.pop();
stack.size();
stack.clear();
stack.pop();
stack.pop();

console.log(stack.pop());
