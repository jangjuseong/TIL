const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);

  graph[a].push(b);
  reverseGraph[b].push(a);
}

let count = 0;

let visited = Array(N + 1).fill(false);

const dfs = node => {
  let cnt = 1;
  visited[node] = true;

  for (let student of graph[node]) {
    if (!visited[student]) {
      cnt += dfs(student);
    }
  }
  return cnt;
};

const reverseDfs = node => {
  let cnt = 1;

  visited[node] = true;

  for (let student of reverseGraph[node]) {
    if (!visited[student]) {
      cnt += reverseDfs(student);
    }
  }

  return cnt;
};

for (let i = 1; i <= N; i++) {
  visited = Array(N + 1).fill(false);
  const smaller = dfs(i) - 1;

  visited = Array(N + 1).fill(false);
  const bigger = reverseDfs(i) - 1;

  if (smaller + bigger === N - 1) {
    count += 1;
  }
}

console.log(count);
