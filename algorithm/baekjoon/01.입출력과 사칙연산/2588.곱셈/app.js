const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../node.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');

const a = parseInt(input[0]);
const b = input[1];

for (i = 2; i >= 0; i--) {
  console.log(b[i] * a);
}

console.log(a * b);
