const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +inputs[0];

for (let i = 1; i < T + 1; i++) {
  const input = inputs[i];
  let isBreak = false;
  let stack = [];

  for (let j = 0; j < input.length; j++) {
    if (input[j] === '(') {
      stack.push('(');
      continue;
    } else if (input[j] === ')' && stack.length > 0) {
      stack.pop();
      continue;
    } else {
      console.log('NO');
      isBreak = true;
      break;
    }
  }

  if (stack.length > 0) {
    console.log('NO');
    continue;
  } else if (isBreak) {
    continue;
  } else {
    console.log('YES');
  }
}
