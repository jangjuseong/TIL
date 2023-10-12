const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);

const graph = Array.from({ length: N }, () => []);
for (let i = 1; i <= N; i++) {
  const route = inputs[i].split('').map(Number);
  graph[i - 1] = route;
}

const visited = Array.from({ length: N }, () => Array(M).fill(false));

let queue = [[0, 0, 1]];
visited[0][0] = true;
let minCount = 0;
while (queue.length > 0) {
  const [x, y, count] = queue.shift();

  if (x === N - 1 && y === M - 1) {
    minCount = count;
    break;
  }

  minCount = count;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < M &&
      !visited[nx][ny] &&
      graph[nx][ny] === 1
    ) {
      visited[nx][ny] = true;
      queue.push([nx, ny, count + 1]);
    }
  }
}

console.log(minCount);
