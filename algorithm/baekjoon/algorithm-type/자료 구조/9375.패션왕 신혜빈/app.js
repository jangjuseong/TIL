const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +inputs[0];

inputs = inputs.slice(1);
const indexArr = [];
for (let i = 0; i < inputs.length; i++) {
  const isNumber = Number(inputs[i]);

  if (isNumber == inputs[i]) {
    indexArr.push(i);
  }
}

const clothes = [];

for (let i = indexArr.length - 1; i >= 0; i--) {
  clothes.unshift(inputs.splice(indexArr[i]));
}

const answers = [];
let tried = 0;
while (tried < t) {
  const hash = {};
  let list = [];
  let sum = 1;
  const arr = [...clothes[tried]].slice(1);
  for (let item of arr) {
    let [name, type] = item.split(' ');
    if (!hash[type]) {
      hash[type] = [name];
    } else {
      hash[type] = [...hash[type], name];
    }
  }
  for (let key in hash) {
    list.push(hash[key].length + 1);
  }
  for (let i = 0; i < list.length; i++) {
    sum *= list[i];
  }
  answers.push(sum - 1);

  tried++;
}
console.log(answers.join('\n'));
