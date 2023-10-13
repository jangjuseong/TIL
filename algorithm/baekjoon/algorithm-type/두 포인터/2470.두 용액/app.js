const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +inputs[0];
const arr = inputs[1].split(' ').map(Number);

arr.sort((a, b) => a - b);
// 여기서 정렬을 arr.sort((a, b) => Math.abs(a) - Math.abs(b)); 이렇게 하니까 틀림

let left = 0;
let right = arr.length - 1;
let minSum = Infinity;
let result = [arr[left], arr[right]];

while (left < right) {
  const sum = arr[left] + arr[right];
  if (Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    result = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(result.sort((a, b) => a - b).join(' '));
