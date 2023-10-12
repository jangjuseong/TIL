const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
const coins = [];

for (let i = 1; i <= n; i++) {
  coins.push(+inputs[i]);
}

let count = 0;

while (true) {
  if (k < 1) {
    break;
  }
  const coin = coins.pop();
  if (coin > k) continue;

  count += Math.floor(k / coin);
  k = k % coin;
}

console.log(count);
