const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [K, N] = inputs[0].split(' ').map(Number);
const lans = [];

for (let i = 1; i <= K; i++) {
  lans.push(parseInt(inputs[i]));
}

let max = Math.max(...lans);
let min = 1;
let result = 0;

while (min <= max) {
  let mid = Math.floor((max + min) / 2);

  let count = 0;

  for (let lan of lans) {
    count += Math.floor(lan / mid);
  }

  if (count < N) {
    max = mid - 1;
  } else {
    result = mid;
    min = mid + 1;
  }
}

console.log(result);
