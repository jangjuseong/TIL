const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../example.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

const arr = input.map((elem) => parseInt(elem));

const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);
