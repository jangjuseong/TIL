const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const t = +inputs.shift();
const answer = [];

const factorial = n => {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

const combination = (n, r) => {
  return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
};

for (let i = 0; i < t; i++) {
  const [west, east] = inputs[i].split(' ').map(Number);
  answer.push(combination(east, west));
}

console.log(answer.join('\n'));
