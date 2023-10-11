const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const input = Number(fs.readFileSync(filePath).toString().trim());

let fiveKgBags = Math.floor(input / 5);
let remainder = input % 5;
let answer = -1;

while (fiveKgBags >= 0) {
  if (remainder % 3 === 0) {
    answer = fiveKgBags + remainder / 3;
    break;
  }

  fiveKgBags--;
  remainder += 5;
}

console.log(answer);
