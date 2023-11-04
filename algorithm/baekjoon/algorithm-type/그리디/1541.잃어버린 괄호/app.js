const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
let input = fs.readFileSync(filePath).toString().trim();

input = input.split(/(\-|\+)/);
let minTotal = parseInt(input[0], 10);
let foundMinus = false;

for (let i = 1; i < input.length; i++) {
  let isNumber = /^\d+$/.test(input[i]);

  if (!isNumber) {
    if (input[i] === '-') {
      foundMinus = true;
    }
  } else {
    if (foundMinus) {
      minTotal -= parseInt(input[i]);
    } else {
      minTotal += parseInt(input[i]);
    }
  }
}

console.log(minTotal);
