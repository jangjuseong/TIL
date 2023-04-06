const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const n = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  let a = 0;
  a = Math.sqrt(n);
  if (parseInt(a) ** 2 == n) {
    return (a + 1) ** 2;
  } else {
    return -1;
  }
}

console.log(solution(n));
