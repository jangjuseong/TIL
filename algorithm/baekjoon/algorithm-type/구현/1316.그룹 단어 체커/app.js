const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = inputs[0];
const words = [];
for (let i = 1; i <= N; i++) {
  words.push(inputs[i]);
}

let count = 0;

for (let word of words) {
  let hash = {};
  let firstWord = word.charAt(0);
  hash[firstWord] = true;
  let isGroupWord = true;
  for (let j = 1; j < word.length; j++) {
    if (!hash[word[j]]) {
      hash[word[j]] = true;
    } else {
      if (word[j] === word[j - 1]) {
        continue;
      }
      isGroupWord = false;
      break;
    }
  }
  if (isGroupWord) count++;
}

console.log(count);
