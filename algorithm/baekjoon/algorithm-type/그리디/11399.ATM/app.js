const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs[0];
let times = inputs[1].split(' ').map(Number);

times = times.sort((a, b) => a - b);
let dp = Array(n + 1).fill(0);
for (let i = 0; i < times.length; i++) {
  dp[i + 1] = dp[i] + times[i];
}

dp = dp.slice(1);
console.log(dp.reduce((acc, cur) => acc + cur, 0));
