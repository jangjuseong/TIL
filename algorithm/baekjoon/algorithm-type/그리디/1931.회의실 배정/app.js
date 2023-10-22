const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs.shift();
let times = inputs.map(item => item.split(' ').map(Number));
times = times.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 1;
let endTime = times[0][1];

for (let i = 1; i < times.length; i++) {
  if (times[i][0] >= endTime) {
    endTime = times[i][1];
    count++;
  }
}

console.log(count);
