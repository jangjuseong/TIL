const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

const dp = Array(1001).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= 1000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);
