const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = inputs[0];
const m = inputs[2];

const answer = [];
let userCards = inputs[1].split(' ').map(Number);

const cards = inputs[3].split(' ').map(Number);

userCards = userCards.sort((a, b) => a - b);

const lowerBound = (array, target) => {
  let start = 0;
  let end = array.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const upperBound = (array, target) => {
  let start = 0;
  let end = array.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const binarySearch = (array, target) => {
  const lower = lowerBound(array, target);
  const upper = upperBound(array, target);

  return upper - lower;
};

for (let i = 0; i < cards.length; i++) {
  answer.push(binarySearch(userCards, cards[i]));
}

console.log(answer.join(' '));
