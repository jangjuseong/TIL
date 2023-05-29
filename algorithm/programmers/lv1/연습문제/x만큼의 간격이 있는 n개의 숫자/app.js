const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');
const x = parseInt(input[0]);
const n = parseInt(input[1]);

function solution(x, n) {
  let num = x;
  const array = [];
  while (array.length < n) {
    array.push(num);
    num += x;
  }
  return array;
}

console.log(solution(x, n));
