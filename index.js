function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.prepend = function(data) {
  // check if list is empty
  // If it is empty then just put a node
  // if not then get current head and move it to added node and cuure

  let node = new Node(data);
  let currentHead = this.head;

  node.next = currentHead;
  this.head = node;
  this.size++;
};

LinkedList.prototype.append = function(data) {
  let node = new Node(data);

  let currentNode = this.head;

  if (currentNode === null) {
    this.head = node;
    this.size++;
    return;
  }

  while (currentNode !== null) {
    if (currentNode.next === null) {
      currentNode.next = node;
      node.next = null;
    }
    currentNode = currentNode.next;
  }
  this.size++;
};

LinkedList.prototype.deleteFirst = function() {
  if (this.head !== null) {
    this.head = this.head.next;
    this.size--;
  }
};

LinkedList.prototype.deleteLast = function() {
  let currentNode = this.head;

  while (currentNode.next !== null) {
    if (currentNode.next.next === null) {
      currentNode.next = null;
      this.size--;
      return;
    }
    currentNode = currentNode.next;
  }
};

LinkedList.prototype.addAtIndex = function(data, index) {
  // If index is not valid

  let node = new Node(data);

  if (index < 0 || index > this.size) {
    console.warn("Index is invalid");
    return;
  }

  // If index is 0 then just prepend the item

  if (index === 0) {
    this.prepend(data);
    return;
  }

  // If index is valid

  let previous;
  let count = 0;
  let currentNode = this.head;

  while (count < index) {
    previous = currentNode;
    count++;
    currentNode = currentNode.next;
  }
  previous.next = node;
  node.next = currentNode;
  this.size++;
};

LinkedList.prototype.deleteAtIndex = function(index) {
  // validate index

  if (index < 0 || index > this.size) {
    console.warn("index not valid");
    return;
  }

  // if index is 0 ( First )
  let currentNode = this.head;

  if (index === 0) {
    this.head = currentNode.next;
    return;
  }

  // If index is greater than 0

  let previous;
  let count = 0;

  while (count < index) {
    previous = currentNode;
    count++;
    currentNode = currentNode.next;
  }

  previous.next = currentNode.next;
  this.size--;
};

LinkedList.prototype.deleteAtValue = function(data) {
  // return if list is empty
  if (this.head === null) {
    console.warn("List is empty");
    return;
  }

  if (this.head.data === data) {
    this.deleteAtIndex(0);
    return;
  }

  // If list is not empty and node is not head then triverse the list

  let currentNode = this.head;
  let previous;

  while (currentNode.data !== data) {
    // console.log(currentNode);
    previous = currentNode;
    currentNode = currentNode.next;
  }

  previous.next = currentNode.next;
  this.size--;
  return;
};

LinkedList.prototype.contains = function(data) {
  let currentNode = this.head;

  if (currentNode === null) {
    console.warn("List is empty");
    return;
  }

  while (currentNode !== null) {
    if (currentNode.data === data) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

LinkedList.prototype.size = function() {
  return this.size;
};

LinkedList.prototype.print = function() {
  let output = "[ ";

  if (!this.isEmpty()) {
    let currentNode = this.head;

    while (currentNode !== null) {
      output += currentNode.data;
      if (currentNode.next !== null) {
        output += ", ";
      }
      currentNode = currentNode.next;
    }
  }
  output += " ]";

  console.log(output);
};
module.exports.LinkedList = LinkedList;