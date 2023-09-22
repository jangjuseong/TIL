const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const input = inputs.slice(1);

const dp = Array(41).fill(0);
dp[0] = 1;
dp[1] = 1;
for (let i = 2; i <= 41; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

for (let i = 0; i < input.length; i++) {
  const num = Number(input[i]);
  if (num === 0) {
    console.log(1, 0);
  } else if (num === 1) {
    console.log(0, 1);
  } else {
    console.log(dp[num - 2], dp[num - 1]);
  }
}
