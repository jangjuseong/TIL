const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +inputs[0];
const v = +inputs[1];

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < v + 2; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);

const queue = [1];
visited[1] = true;
while (queue.length > 0) {
  const node = queue.shift();

  for (let v of graph[node]) {
    if (!visited[v]) {
      visited[v] = true;
      queue.push(v);
    }
  }
}

console.log(visited.filter(i => i === true).length - 1);
