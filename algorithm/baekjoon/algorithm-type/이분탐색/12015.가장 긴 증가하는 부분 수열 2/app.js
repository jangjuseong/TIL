const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const A = inputs[1].split(' ').map(Number);
const lis = []; // lis는 Longest Increasing Subsequence의 약자

for (let i = 0; i < A.length; i++) {
  let start = 0;
  let end = lis.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (lis[mid] < A[i]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  lis[start] = A[i];
}

console.log(lis.length);
