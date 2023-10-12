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

for (let num of arr) {
  let start = 0;
  let end = A.length - 1;
  let isFound = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (A[mid] === num) {
      isFound = true;
      break;
    } else if (A[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  answer.push(isFound ? 1 : 0);
}

console.log(answer.join('\n'));
