const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const year = parseInt(input);

console.log(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 1 : 0);
