const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/../node.txt`;
const input = fs.readFileSync(filePath).toString().trim();

console.log(Number(input) - 543);
