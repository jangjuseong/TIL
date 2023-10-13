const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs[0];
const score = inputs.map(Number);
const dp = Array(n + 1).fill([]);

dp[0] = 0;
dp[1] = [[score[1], [1]]];
dp[2] = [
  [score[2], [2]],
  [score[1] + score[2], [1, 2]],
];

for (let i = 3; i < score.length; i++) {
  dp[i] = [
    [score[i] + Math.max(...dp[i - 2].map(i => i[0])), [i, i - 2]],
    [score[i] + dp[i - 1].filter(i => !i[1].includes(i - 2))[0][0], [i, i - 1]],
  ];
}
console.log(Math.max(...dp[n].map(i => i[0])));
