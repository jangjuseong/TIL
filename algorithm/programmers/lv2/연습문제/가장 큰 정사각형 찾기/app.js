function solution(board) {
  let maxSquareSize = 0;
  const rows = board.length;
  const cols = board[0].length;

  // 만약 보드의 크기가 1x1이고, 그 값이 1이면 바로 1을 반환
  if (rows === 1 || cols === 1) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === 1) {
          return 1;
        }
      }
    }
  }

  // 각 칸에 대하여 최대 크기 정사각형의 한 변의 길이를 업데이트
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (board[i][j] > 0) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        maxSquareSize = Math.max(maxSquareSize, board[i][j]);
      }
    }
  }

  // 최대 크기의 정사각형의 넓이를 반환
  return maxSquareSize * maxSquareSize;
}
