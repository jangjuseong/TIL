const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, K] = inputs[0].split(' ').map(Number);

const graph = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = inputs[i].split(' ').map(Number);
  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      graph[j][k] = 1;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let count = 0;
const areas = [];

const bfs = (x, y) => {
  let area = 0;
  const queue = [[x, y]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    area++;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
        graph[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }

  return area;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 0) {
      graph[i][j] = 1;
      count++;
      areas.push(bfs(i, j));
    }
  }
}
console.log(count);
console.log(areas.sort((a, b) => a - b).join(' '));
