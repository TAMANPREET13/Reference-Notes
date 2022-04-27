class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let curr;

    // If empty , make head
    if (!this.head) {
      this.head = node;
    } else {
      curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }
    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let curr, prev;

    //Set curr to first
    curr = this.head;
    let count = 0;

    while (count < index) {
      prev = curr; // Node before index
      count++;
      curr = curr.next; // Node after the index
    }

    node.next = curr;
    prev.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let curr = this.head;
    let count = 0;

    while (curr) {
      if (count == index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let curr = this.head;
    let prev;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const li = new LinkedList();

li.insertFirst(100);
li.insertFirst(200);
li.insertFirst(300);

li.insertLast(400);
li.insertAt(500, 2);
li.clearList();

// li.removeAt(2);
// li.removeAt(0);
li.printListData();
// li.getAt(2);
// li.getAt(0);
