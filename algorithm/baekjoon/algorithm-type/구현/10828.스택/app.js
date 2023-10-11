const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const stack = [];
const answer = [];
const N = +inputs[0];
for (let i = 1; i <= N; i++) {
  const word = inputs[i].split(' ');
  if (word[0] === 'push') {
    stack.push(+word[1]);
  } else if (word[0] === 'pop') {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  } else if (word[0] === 'size') {
    answer.push(stack.length);
  } else if (word[0] === 'empty') {
    if (stack.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (word[0] === 'top') {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }
}
console.log(answer.join('\n'));
