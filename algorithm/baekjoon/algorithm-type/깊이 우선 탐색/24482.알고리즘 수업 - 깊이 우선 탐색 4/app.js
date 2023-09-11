const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

const depth = Array(N + 1).fill(-1);
const visited = Array(N + 1).fill(false);

const dfs = (node, currentDepth) => {
  visited[node] = true;
  depth[node] = currentDepth;

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next, currentDepth + 1);
    }
  }
};

dfs(R, 0);

console.log(depth.slice(1).join('\n'));

/*
for (let i = 1; i < depth.length; i++) {
  console.log(depth[i]);
}

위 코드대로 했더니, 시간 초과가 나온다.
Node.js에서는 console.log가 상대적으로 느린 연산이라서, 출력 최적화를 위해 console.log는 한 번만 호출하는 것이 좋다고 한다. */
