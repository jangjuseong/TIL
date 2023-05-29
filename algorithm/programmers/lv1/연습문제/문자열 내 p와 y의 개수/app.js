const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const s = fs.readFileSync(filePath).toString().trim();

function solution(s) {
  s = s.toLowerCase();
  const countY = Number(s.split('y').length - 1);
  const countP = Number(s.split('p').length - 1);

  if (countY == countP) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(s));
