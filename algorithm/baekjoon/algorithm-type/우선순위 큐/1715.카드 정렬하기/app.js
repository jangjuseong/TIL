const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const n = inputs.shift();

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return;

    const smallest = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return smallest;
  }

  sinkDown() {
    let index = 0;
    const element = this.heap[index];
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];

        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        if (
          (rightChild < element && swap === null) ||
          (rightChild < leftChild && swap !== null)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const heap = new MinHeap();
for (let i = 0; i < inputs.length; i++) {
  heap.insert(inputs[i]);
}

let sum = 0;
while (heap.heap.length > 1) {
  let tempSum = 0;
  const value1 = heap.extractMin();
  const value2 = heap.extractMin();

  tempSum = value1 + value2;
  sum += tempSum;
  heap.insert(tempSum);
}

console.log(sum);
