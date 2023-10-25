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
const answer = [];

class MinAbsHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (
        this.heap[index][0] < this.heap[parentIndex][0] ||
        (this.heap[index][0] === this.heap[parentIndex][0] &&
          this.heap[index][1] < this.heap[parentIndex][1])
      ) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractAbsMin() {
    if (this.heap.length === 0) return [0, 0];
    let smallest = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return smallest;
  }

  sinkDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let smallerChildIndex = index * 2 + 1;
      if (
        index * 2 + 2 < this.heap.length &&
        (this.heap[index * 2 + 2][0] < this.heap[smallerChildIndex][0] ||
          (this.heap[index * 2 + 2][0] === this.heap[smallerChildIndex][0] &&
            this.heap[index * 2 + 2][1] < this.heap[smallerChildIndex][1]))
      ) {
        smallerChildIndex = index * 2 + 2;
      }
      if (
        this.heap[index][0] > this.heap[smallerChildIndex][0] ||
        (this.heap[index][0] === this.heap[smallerChildIndex][0] &&
          this.heap[index][1] > this.heap[smallerChildIndex][1])
      ) {
        [this.heap[index], this.heap[smallerChildIndex]] = [
          this.heap[smallerChildIndex],
          this.heap[index],
        ];
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }
}

const heap = new MinAbsHeap();

for (let input of inputs) {
  if (input === 0) {
    const [_, val] = heap.extractAbsMin();
    answer.push(val);
  } else {
    heap.insert([Math.abs(input), input]);
  }
}

console.log(answer.join('\n'));
