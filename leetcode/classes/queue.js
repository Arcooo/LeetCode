export class Queue {
  constructor(initial = []) {
    this.items = Array.isArray(initial) ? [...initial] : [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    // removes from the *end* (LIFO)
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}