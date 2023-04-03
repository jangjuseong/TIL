const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}

// 다음과 같이 더 간단하게 작성 가능(삼항연산자)
// console.log(a > b ? '>' : a < b ? '<' : '==');
