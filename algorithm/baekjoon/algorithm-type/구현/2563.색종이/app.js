const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(inputs[0]);
const graph = Array.from({ length: 101 }, () => Array(101).fill(0));

for (let i = 1; i < inputs.length; i++) {
  const [x, y] = inputs[i].split(' ').map(Number);
  for (let a = x; a < x + 10; a++) {
    for (let b = y; b < y + 10; b++) {
      graph[a][b] = 1;
    }
  }
}

let answer = 0;
for (let row of graph) {
  answer += row.filter(item => item === 1).length;
}
console.log(answer);
