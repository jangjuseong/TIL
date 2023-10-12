const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const sites = inputs.slice(n + 1);
const hash = {};
for (let i = 1; i <= n; i++) {
  const [site, password] = inputs[i].split(' ');
  hash[site] = password;
}

const answer = [];
for (let s of sites) {
  answer.push(hash[s]);
}

console.log(answer.join('\n'));
