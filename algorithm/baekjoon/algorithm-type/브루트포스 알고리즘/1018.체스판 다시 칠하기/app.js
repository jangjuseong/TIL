const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const board = [];
for (let i = 1; i <= n; i++) {
  const input = inputs[i].split('');
  board.push(input);
}

let minCount = Infinity;
let count = 0;

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let count1 = 0;
    let count2 = 0;
    let firstColor = board[i][j];
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        if ((k + l) % 2 === 0 && board[i + k][j + l] !== firstColor) {
          count1++;
        } else if ((k + l) % 2 === 1 && board[i + k][j + l] === firstColor) {
          count1++;
        }
        if ((k + l) % 2 === 0 && board[i + k][j + l] === firstColor) {
          count2++;
        } else if ((k + l) % 2 === 1 && board[i + k][j + l] !== firstColor) {
          count2++;
        }
      }
    }
    minCount = Math.min(minCount, count1, count2);
  }
}

console.log(minCount);
