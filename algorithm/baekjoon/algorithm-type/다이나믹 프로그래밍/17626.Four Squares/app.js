const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const n = +fs.readFileSync(filePath).toString().trim();

const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= Math.sqrt(n); i++) {
  const square = i * i;

  for (let j = square; j <= n; j++) {
    dp[j] = Math.min(dp[j], dp[j - square] + 1);
  }
}

console.log(dp[n]);
