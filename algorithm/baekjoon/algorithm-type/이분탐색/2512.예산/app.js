const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(inputs[0]);
const reqBudgets = inputs[1].split(' ').map(Number);
const totalBudget = Number(inputs[2]);

const totalRequest = reqBudgets.reduce((acc, cur) => acc + cur, 0);

if (totalRequest <= totalBudget) {
  console.log(Math.max(...reqBudgets));
  return;
}

let min = 0;
let max = Math.max(...reqBudgets);
let result = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let tempSum = 0;

  for (let budget of reqBudgets) {
    if (budget > mid) {
      tempSum += mid;
      continue;
    }
    tempSum += budget;
  }

  if (tempSum <= totalBudget) {
    min = mid + 1;
    result = mid;
  } else {
    max = mid - 1;
  }
}

console.log(result);
