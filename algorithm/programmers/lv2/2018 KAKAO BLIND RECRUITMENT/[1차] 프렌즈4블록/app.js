function solution(m, n, board) {
  var answer = 0;

  board = board.map(e => e.split(''));

  while (true) {
    const removable = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          removable.add(i + ',' + j);
          removable.add(i + ',' + (j + 1));
          removable.add(i + 1 + ',' + j);
          removable.add(i + 1 + ',' + (j + 1));
        }
      }
    }
    if (!removable.size) break;

    removable.forEach(pos => {
      const [x, y] = pos.split(',');
      board[x][y] = 0;
    });
    answer += removable.size;

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j]) {
              board[i][j] = board[k][j];
              board[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}
