function solution(board, moves) {
  var answer = 0;
  const stack = [];
  const n = board.length;
  const machine = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      machine[j][i] = board[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    machine[i].reverse();
  }
  // 네오:1, 개구리:3, 무지:2, 프로도:5, 어피치:4
  for (let move of moves) {
    while (true) {
      if (machine[move - 1].length === 0) {
        break;
      }
      const item = machine[move - 1].pop();
      if (item === 0) continue;
      stack.push(item);
      break;
    }
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }

  return answer;
}
