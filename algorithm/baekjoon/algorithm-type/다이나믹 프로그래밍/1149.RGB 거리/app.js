const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +inputs.shift();
const dp = Array.from({ length: n }, () => Array(3).fill(0));
[dp[0][0], dp[0][1], dp[0][2]] = inputs[0].split(' ').map(Number);
for (let i = 1; i < inputs.length; i++) {
  const [r, g, b] = inputs[i].split(' ').map(Number);
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + r;
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + g;
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + b;
}
console.log(Math.min(...dp[n - 1]));
