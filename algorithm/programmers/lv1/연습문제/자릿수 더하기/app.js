const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const n = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  const array = String(n).split('').map(Number);
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log(solution(n));
