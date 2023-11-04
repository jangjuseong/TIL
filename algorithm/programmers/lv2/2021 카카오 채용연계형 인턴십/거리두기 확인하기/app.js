function checkDistance(place) {
  const dx = [0, 0, 1, -1, 1, 1, -1, -1, 2, 0, -2, 0];
  const dy = [1, -1, 0, 0, 1, -1, 1, -1, 0, 2, 0, -2];

  function isSafe(x, y) {
    return x >= 0 && x < 5 && y >= 0 && y < 5;
  }

  function canSit(x, y, board) {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (!isSafe(nx, ny)) continue;
      if (board[nx][ny] === 'P') {
        // For adjacent seats
        if (Math.abs(dx[i]) + Math.abs(dy[i]) === 1) {
          return false;
        }
        // For seats at distance 2
        if (Math.abs(dx[i]) + Math.abs(dy[i]) === 2) {
          if (dx[i] === 0 || dy[i] === 0) {
            if (board[x + dx[i] / 2][y + dy[i] / 2] !== 'X') {
              return false;
            }
          } else {
            if (board[x][ny] !== 'X' || board[nx][y] !== 'X') {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] === 'P' && !canSit(i, j, place)) {
        return 0;
      }
    }
  }
  return 1;
}

function solution(places) {
  return places.map(checkDistance);
}
