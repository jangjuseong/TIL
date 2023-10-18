const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +inputs.shift();
const deque = [];
const answer = [];
for (let i = 0; i < n; i++) {
  const [command, num] = inputs[i].split(' ');
  if (command === 'push_back') deque.push(Number(num));
  if (command === 'push_front') deque.unshift(Number(num));
  if (command === 'pop_front')
    answer.push(deque.length === 0 ? -1 : deque.shift());
  if (command === 'pop_back')
    answer.push(deque.length === 0 ? -1 : deque.pop());
  if (command === 'size') answer.push(deque.length);
  if (command === 'empty') deque.length === 0 ? answer.push(1) : answer.push(0);
  if (command === 'front') answer.push(deque.length === 0 ? -1 : deque[0]);
  if (command === 'back')
    answer.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
}

console.log(answer.join('\n'));
