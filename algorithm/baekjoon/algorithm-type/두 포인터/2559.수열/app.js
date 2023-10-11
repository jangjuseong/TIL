const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = inputs[0].split(' ').map(Number);
const numbers = inputs[1].split(' ').map(Number);

let start = 0;
let end = K;
let sum = numbers.slice(0, K).reduce((acc, cur) => acc + cur, 0);
let answer = sum;

while (end < numbers.length) {
  sum += numbers[end++];
  sum -= numbers[start++];
  if (sum > answer) answer = sum;
}

console.log(answer);
