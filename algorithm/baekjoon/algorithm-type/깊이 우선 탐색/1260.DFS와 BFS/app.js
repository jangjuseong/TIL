const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const input = fs.readFileSync(filePath).toString().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

const dfsResult = [];
const dfsVisited = Array(n + 1).fill(false);

const dfs = node => {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (let next of graph[node]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
};

dfs(v);

const bfsResult = [];
const bfsVisited = Array(n + 1).fill(false);
const queue = [];

queue.push(v);
bfsVisited[v] = true;

while (queue.length > 0) {
  const current = queue.shift();
  bfsResult.push(current);

  for (let next of graph[current]) {
    if (!bfsVisited[next]) {
      queue.push(next);
      bfsVisited[next] = true;
    }
  }
}

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
