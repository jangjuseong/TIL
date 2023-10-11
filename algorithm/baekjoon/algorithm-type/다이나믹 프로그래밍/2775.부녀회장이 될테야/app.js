const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +inputs[0];
const input = inputs.slice(1);
const condition = [];
let maxFloor = 0;
const answer = [];

for (let i = 0; i < T; i++) {
  if (+input[i * 2] > maxFloor) maxFloor = +input[i * 2];
  condition.push([+input[i * 2], +input[i * 2 + 1]]);
}

const dp = Array.from({ length: maxFloor + 1 }, () => Array(14).fill(0));
dp[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

for (let i = 1; i <= maxFloor; i++) {
  for (let j = 0; j <= 13; j++) {
    const sum = dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0);
    dp[i][j] = sum;
  }
}

for (let i = 0; i < condition.length; i++) {
  answer.push(dp[condition[i][0]][condition[i][1] - 1]);
}

console.log(answer.join('\n'));
