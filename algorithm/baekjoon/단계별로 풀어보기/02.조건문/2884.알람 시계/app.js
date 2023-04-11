const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

m -= 45;
if (m < 0) {
  m += 60;
  h -= 1;
}

if (h < 0) {
  h += 24;
}

console.log(h, m);
