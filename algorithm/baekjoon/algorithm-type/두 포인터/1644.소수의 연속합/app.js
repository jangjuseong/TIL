const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const n = +fs.readFileSync(filePath).toString().trim();
const isPrime = Array(n + 1).fill(true);
const primeNumber = [];

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 2; i <= n; i++) {
  if (isPrime[i]) {
    primeNumber.push(i);
  }
}

let start = 0;
let end = 0;
let sum = 0;
let count = 0;
while (end <= primeNumber.length) {
  if (start > n) {
    break;
  }
  if (sum < n) {
    sum += primeNumber[end++];
  } else {
    sum -= primeNumber[start++];
  }

  if (sum === n) {
    count++;
  }
}

console.log(count);
