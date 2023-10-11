const hash = {};
for (let i = 1; i <= 10000; i++) {
  hash[i] = false;
}

for (let i = 1; i <= 10000; i++) {
  let num = i.toString();
  const sum = num
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  if (sum + i > 10000) continue;
  hash[sum + i] = true;
}

const arr = [];

for (let key in hash) {
  if (!hash[key]) arr.push(parseInt(key));
}

console.log(arr.join('\n'));
