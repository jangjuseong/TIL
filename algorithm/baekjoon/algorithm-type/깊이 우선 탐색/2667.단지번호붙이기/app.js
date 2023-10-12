const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs[0];
const graph = [];

for (let i = 1; i <= n; i++) {
  const input = inputs[i];
  graph[i - 1] = input.split('').map(Number);
}

const answer = [];

const visited = Array.from({ length: n }, () => Array(n).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= n ||
    y >= n ||
    graph[x][y] === 0 ||
    visited[x][y] === true
  ) {
    return 0;
  }

  visited[x][y] = true;

  let count = 1;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    count += dfs(nx, ny);
  }

  return count;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1 && visited[i][j] === false) {
      answer.push(dfs(i, j));
    }
  }
}

answer.sort((a, b) => a - b);
answer.unshift(answer.length);
console.log(answer.join('\n'));
