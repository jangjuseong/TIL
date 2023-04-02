const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../node.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
