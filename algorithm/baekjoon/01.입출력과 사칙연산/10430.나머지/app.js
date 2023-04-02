const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../node.txt`;
const input = fs.readFileSync(filePath).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);

// parseInt를 하지 않으면 string으로 인식해서 결과값이 다르게 나온다. 주의!
