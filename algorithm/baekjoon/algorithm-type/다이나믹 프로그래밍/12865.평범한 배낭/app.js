const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, k] = inputs[0].split(' ').map(Number);

const items = inputs.slice(1).map(e => e.split(' ').map(Number));
items.unshift([]);
const dp = Array(k + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = k; j >= 1; j--) {
    if (items[i][0] <= j) {
      dp[j] = Math.max(dp[j], dp[j - items[i][0]] + items[i][1]);
    }
  }
}

console.log(dp[k]);
