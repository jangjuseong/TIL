const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const n = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
}

console.log(solution(n));
