const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = inputs[0].split(' ').map(Number);

const dp = Array(k + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const [weight, value] = inputs[i].split(' ').map(Number);

  for (let j = k; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}
console.log(dp[k]);
