const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const n = +fs.readFileSync(filePath).toString().trim();

const factorial = value => {
  if (value === 0) return 1;
  if (value === 1) return 1;
  return value * factorial(value - 1);
};

console.log(factorial(n));
