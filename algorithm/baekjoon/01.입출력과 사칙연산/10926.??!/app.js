const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../node.txt`;
const input = fs.readFileSync(filePath).toString().trim(); // input이 하나일 때는 trim을 해줘야 하나보다.

const a = input;
console.log(a + '??!');
