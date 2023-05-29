const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const n = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  n = String(n);
  const array = n.split('');
  for (i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  array.sort((a, b) => b - a);
  n = Number(array.join(''));
  return n;
}

console.log(solution(n));
