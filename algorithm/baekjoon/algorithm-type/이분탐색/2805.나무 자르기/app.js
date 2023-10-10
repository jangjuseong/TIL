const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const trees = inputs[1].split(' ').map(Number);

let low = 0;
let high = Math.max(...trees);
let result = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let total = 0;

  for (let tree of trees) {
    if (tree > mid) {
      total += tree - mid;
    }
  }

  if (total >= M) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
