const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../example.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

const a = input[0];
const b = input[1];
console.log(a / b);
