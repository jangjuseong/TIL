const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(inputs[0]);

const grid = inputs.slice(1).map(row => row.split(''));

let normalCount = 0;
let colorBlindCount = 0;

const normalVisited = Array.from({ length: N }, () => Array(N).fill(false));
const colorBlindVisited = Array.from({ length: N }, () => Array(N).fill(false));

const dfs = (grid, visited, i, j, N, isColorBlind) => {
  if (i < 0 || j < 0 || j >= N || i >= N || visited[i][j]) return;

  visited[i][j] = true;
  const currentColor = grid[i][j];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let dir of directions) {
    const [x, y] = [i + dir[0], j + dir[1]];

    if (x >= 0 && x < N && y >= 0 && y < N) {
      const nextColor = grid[x][y];
      if (isColorBlind) {
        if (
          (currentColor === 'R' || currentColor === 'G') &&
          (nextColor === 'R' || nextColor === 'G')
        ) {
          dfs(grid, visited, x, y, N, isColorBlind);
        } else if (currentColor === nextColor) {
          dfs(grid, visited, x, y, N, isColorBlind);
        }
      } else {
        if (currentColor === nextColor) {
          dfs(grid, visited, x, y, N, isColorBlind);
        }
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!normalVisited[i][j]) {
      dfs(grid, normalVisited, i, j, N, false);
      normalCount++;
    }
    if (!colorBlindVisited[i][j]) {
      dfs(grid, colorBlindVisited, i, j, N, true);
      colorBlindCount++;
    }
  }
}

console.log(`${normalCount} ${colorBlindCount}`);
