const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');
const now = input[0].split(' ').map((item) => +item); // map을 이용하여 숫자로 만들기. + 붙이면 숫자가 된다.
let h = now[0];
let m = now[1];
const time = +input[1];

let time_h = parseInt(time / 60);
let time_m = time % 60;

h += time_h;
m += time_m;

if (m >= 60) {
  m -= 60;
  h += 1;
}
if (h >= 24) {
  h -= 24;
}

console.log(h, m);
