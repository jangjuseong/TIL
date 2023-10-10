const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, C] = inputs[0].split(' ').map(Number);
const houses = [];
for (let i = 1; i <= N; i++) {
  houses.push(Number(inputs[i]));
}
houses.sort((a, b) => a - b);

let min = 1;
let max = Math.max(...houses) - Math.min(...houses);
let answer = 0;

const isPossible = distance => {
  let count = 1;
  let prevHouse = houses[0];

  for (let i = 1; i <= N; i++) {
    if (houses[i] - prevHouse >= distance) {
      count++;
      prevHouse = houses[i];
    }
  }

  return count >= C;
};

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  if (isPossible(mid)) {
    answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
