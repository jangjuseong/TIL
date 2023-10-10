const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = inputs[0];
const M = inputs[2];
const A = inputs[1].split(' ').map(Number);
const arr = inputs[3].split(' ').map(Number);
const answer = [];

A.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  let left = 0;
  let right = A.length - 1;
  let mid = Math.floor((left + right) / 2);
  let isExist = false;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (A[mid] === arr[i]) {
      isExist = true;
      break;
    }

    if (arr[i] > A[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  isExist ? answer.push(1) : answer.push(0);
}

console.log(answer.join('\n'));
