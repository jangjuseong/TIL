function solution(board) {
  const ROWS = board.length;
  const COLS = board[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const getStartAndGoalPositions = () => {
    let startRow, startCol, goalRow, goalCol;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (board[i][j] === 'R') {
          startRow = i;
          startCol = j;
        } else if (board[i][j] === 'G') {
          goalRow = i;
          goalCol = j;
        }
      }
    }
    return { startRow, startCol, goalRow, goalCol };
  };

  const isValidMove = (x, y) => {
    return x >= 0 && x < ROWS && y >= 0 && y < COLS && board[x][y] !== 'D';
  };

  const { startRow, startCol, goalRow, goalCol } = getStartAndGoalPositions();
  const visited = new Array(ROWS).fill().map(() => new Array(COLS).fill(false));
  const queue = [];
  queue.push([startRow, startCol, 0]);
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [currentRow, currentCol, moves] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newRow = currentRow + dx[i];
      let newCol = currentCol + dy[i];

      while (isValidMove(newRow, newCol)) {
        newRow += dx[i];
        newCol += dy[i];
      }

      newRow -= dx[i];
      newCol -= dy[i];

      if (newRow === goalRow && newCol === goalCol) {
        return moves + 1;
      }

      if (!visited[newRow][newCol]) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, moves + 1]);
      }
    }
  }

  return -1;
}
