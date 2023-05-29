const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

function solution(a, b) {
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    answer = a;
  }

  return answer;
}

console.log(solution(a, b));
