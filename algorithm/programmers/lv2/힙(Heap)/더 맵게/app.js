class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    const poppedValue = this.heap.pop();
    let i = 0;
    while (true) {
      console.log(i, this.heap);
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let swap = null;
      if (left < this.heap.length && this.heap[left] < this.heap[i])
        swap = left;
      if (
        right < this.heap.length &&
        this.heap[right] < (swap === null ? this.heap[i] : this.heap[left])
      )
        swap = right;
      if (swap === null) break;
      [this.heap[i], this.heap[swap]] = [this.heap[swap], this.heap[i]];
      i = swap;
    }
    return poppedValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  for (const scov of scoville) {
    minHeap.push(scov);
  }

  let answer = 0;
  while (true) {
    const minScoville = minHeap.peek();
    if (minScoville >= K) return answer;
    if (minHeap.heap.length < 2) return -1;

    const firstMin = minHeap.pop();
    const secondMin = minHeap.pop();
    minHeap.push(firstMin + 2 * secondMin);
    answer++;
  }
}
