const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = inputs[0];
const M = inputs[2];

let A = inputs[1].split(' ').map(Number);
const arr = inputs[3].split(' ').map(Number);

A = A.sort((a, b) => a - b);

const answer = [];

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return true;
    } else if (target > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

for (let i = 0; i < M; i++) {
  answer.push(binarySearch(A, arr[i]) ? 1 : 0);
}

console.log(answer.join('\n'));
