import Node from './nodeclass';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      return;
    }

    const node = new Node(value);
    let ptr = this.headNode;

    while (ptr.next !== null) {
      ptr = ptr.next;
    }

    ptr.next = node;
  }

  prepend(value) {
    const node = new Node(value);
    const ptr = this.headNode;
    node.next = ptr;
    this.headNode = node;
  }

  size() {
    let size = 0;
    let ptr = this.headNode;
    while (ptr != null) {
      size += 1;
      ptr = ptr.next;
    }
    return size;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    if (this.headNode === null) {
      throw Error('List is empty');
    }

    let ptr = this.headNode;

    while (ptr.next != null) {
      ptr = ptr.next;
    }

    return ptr.value;
  }

  at(index) {
    let curr = 0;
    let ptr = this.headNode;
    while (curr != index && ptr != null) {
      ptr = ptr.next;
      curr++;
    }
    if (ptr === null) {
      throw Error('Invalid index');
    }
    return ptr.value;
  }

  pop() {
    let prev = null;
    let ptr = this.headNode;
    if (ptr === null) {
      throw Error('List is empty');
    }
    while (ptr.next !== null) {
      prev = ptr;
      ptr = ptr.next;
    }
    prev.next = null;
  }

  contains(value) {
    let ptr = this.headNode;
    while (ptr !== null) {
      if (ptr.value === value) {
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let ptr = this.headNode;
    while (ptr !== null) {
      if (ptr.value === value) {
        return index;
      }
      ptr = ptr.next;
      index++;
    }
    return null;
  }

  toString() {
    let stringList = '';
    let ptr = this.headNode;
    while (ptr !== null) {
      stringList += `( ${ptr.value} ) => `;
      ptr = ptr.next;
    }
    stringList += 'null'

    return stringList;
  }

  insertAt(value, index) {
    const node = new Node(value);
    let ptr = this.headNode;
    let curr = 0;

    while (ptr !== null) {
      if (curr === index - 1) {
        node.next = ptr.next;
        ptr.next = node;
        return;
      }
      ptr = ptr.next;
      curr++;
    }
    throw Error('Invalid index');
  }

  removeAt(index) {
    let curr = 0;
    let prev = null;
    let ptr = this.headNode;

    while (ptr !== null) {
      if (curr === index) {
        prev.next = ptr.next;
        return;
      }
      prev = ptr;
      ptr = ptr.next;
      curr++;
    }
    throw Error('Invalid index');
  }
}

export default LinkedList;
