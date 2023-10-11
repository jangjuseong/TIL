const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const numbers = inputs[1].split(' ').map(Number);

let start = 0;
let end = 0;
let sum = 0;
let count = 0;

while (end <= N) {
  if (sum < M) {
    sum += numbers[end++];
  } else {
    sum -= numbers[start++];
  }

  if (sum === M) {
    count++;
  }
}

console.log(count);
