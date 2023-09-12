const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const board = inputs.map(item => item.split(' '));
const bucket = new Set();

dx = [1, -1, 0, 0];
dy = [0, 0, 1, -1];

const dfs = (x, y, string) => {
  if (string.length > 6) return;
  if (string.length === 6) {
    if (!bucket.has(string)) {
      bucket.add(string);
      return;
    }
  }

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
    dfs(nx, ny, string + board[nx][ny]);
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, board[i][j]);
  }
}

console.log(bucket.size);
