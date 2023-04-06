const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const x = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(x) {
  const array = Array.from(String(x), Number);
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(x));
