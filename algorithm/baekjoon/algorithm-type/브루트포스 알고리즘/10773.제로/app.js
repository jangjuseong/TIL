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
const stack = [];
for (let input of inputs) {
  if (input !== 0) {
    stack.push(input);
  } else {
    stack.pop();
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
