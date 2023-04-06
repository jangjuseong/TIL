const fs = require('fs');
const filePath = `${__dirname}/../../../example.txt`;
const n = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(n) {
  n = String(n);
  const array = n.split('');
  array.reverse();
  for (i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  return array;
}

console.log(solution(n));
