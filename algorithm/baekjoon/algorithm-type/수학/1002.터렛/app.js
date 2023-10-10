const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const T = inputs[0];
for (i = 1; i <= T; i++) {
  const [x1, y1, r1, x2, y2, r2] = inputs[i].split(' ').map(Number);

  const d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  if (x1 === x2 && y1 === y2 && r1 === r2) {
    console.log(-1);
  } else if (d + Math.min(r1, r2) === Math.max(r1, r2)) {
    console.log(1);
  } else if (d > Math.abs(r1 - r2) && d < r1 + r2) {
    console.log(2);
  } else if (d === r1 + r2) {
    console.log(1);
  } else if (d > r1 + r2) {
    console.log(0);
  } else {
    console.log(0);
  }
}
