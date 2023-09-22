const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +inputs[0];

const dp = Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let j = 4; j <= 10; j++) {
  dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
}

for (let i = 1; i <= T; i++) {
  const n = Number(inputs[i]);
  console.log(dp[n]);
}
