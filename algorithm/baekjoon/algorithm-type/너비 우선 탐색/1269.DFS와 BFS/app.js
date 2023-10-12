const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = inputs[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i < graph.length; i++) {
  graph[i] = graph[i].sort((a, b) => a - b);
}

let dfsVisited = Array.from({ length: N + 1 }, () => false);
let dfsAnswer = [V];

const dfs = node => {
  dfsVisited[node] = true;
  for (let next of graph[node]) {
    if (!dfsVisited[next]) {
      dfsAnswer.push(next);
      dfs(next);
    }
  }
};

dfs(V);

// ----------------

let bfsVisited = Array.from({ length: N + 1 }, () => false);
let bfsAnswer = [];

const bfs = node => {
  let queue = [node];

  while (queue.length > 0) {
    let vertex = queue.shift();
    bfsAnswer.push(vertex);
    bfsVisited[vertex] = true;

    for (let next of graph[vertex]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
};

bfs(V);
console.log(dfsAnswer.join(' '));
console.log(bfsAnswer.join(' '));
