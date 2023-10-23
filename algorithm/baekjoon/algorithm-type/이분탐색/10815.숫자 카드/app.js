const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs[0];
const m = +inputs[2];
const cards = inputs[1].split(' ').map(Number);
const userCards = inputs[3].split(' ').map(Number);

const answer = [];

cards.sort((a, b) => a - b);

for (let i = 0; i < m; i++) {
  let min = 0;
  let max = n - 1;
  let isFound = false;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (cards[mid] === userCards[i]) {
      answer.push(1);
      isFound = true;
      break;
    } else if (userCards[i] < cards[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  if (!isFound) answer.push(0);
}

console.log(answer.join(' '));
