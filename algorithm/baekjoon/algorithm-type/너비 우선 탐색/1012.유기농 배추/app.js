const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const t = inputs.shift();

const answer = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const bfs = (width, height, graph, n, m) => {
  const queue = [[width, height]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    // ---------- [여기]

    for (let z = 0; z < 4; z++) {
      const nx = x + dx[z];
      const ny = y + dy[z];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n || graph[nx][ny] === 0)
        continue;
      graph[nx][ny] = 0; // 그래프를 초기화 하는 위치를 [여기]에서 현재 위치로 옮겼더니 시간 초과 문제 해결
      queue.push([nx, ny]);
    }
  }
};

for (let i = 0; i < t; i++) {
  const [m, n, k] = inputs.shift().split(' ').map(Number);
  const graph = Array.from({ length: m }, () => Array(n).fill(0));
  let count = 0;
  for (let j = 0; j < k; j++) {
    const [x, y] = inputs.shift().split(' ').map(Number);
    graph[x][y] = 1;
  }

  for (let width = 0; width < m; width++) {
    for (let height = 0; height < n; height++) {
      if (graph[width][height] === 1) {
        bfs(width, height, graph, n, m);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join('\n'));
