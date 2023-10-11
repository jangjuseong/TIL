const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = inputs[0].split(' ').map(Number);
const numbers = inputs[1].split(' ').map(Number);

let start = 0;
let end = 0;
let length = Infinity;
let sum = 0;

while (end <= N) {
  if (sum < S) {
    sum += numbers[end++];
  } else {
    sum -= numbers[start++];
  }

  if (sum >= S && end - start < length) {
    length = end - start;
  }
}

console.log(length === Infinity ? 0 : length);
