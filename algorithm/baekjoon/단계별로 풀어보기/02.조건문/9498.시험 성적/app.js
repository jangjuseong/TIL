const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../../example.txt`;
const a = parseInt(fs.readFileSync(filePath).toString().trim());

if (90 <= a && a <= 100) {
  console.log('A');
} else if (80 <= a && a <= 89) {
  console.log('B');
} else if (70 <= a && a <= 79) {
  console.log('C');
} else if (60 <= a && a <= 69) {
  console.log('D');
} else {
  console.log('F');
}
