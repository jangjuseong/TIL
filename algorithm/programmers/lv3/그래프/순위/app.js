function solution(n, results) {
  let answer = 0;
  const wins = Array.from({ length: n + 1 }, () => new Set());
  const loses = Array.from({ length: n + 1 }, () => new Set());

  for (let result of results) {
    const [A, B] = result;
    wins[A].add(B);
    loses[B].add(A);
  }

  for (let i = 1; i <= n; i++) {
    for (let loser of wins[i]) {
      for (let winner of loses[i]) {
        wins[winner].add(loser);
      }
    }
    for (let winner of loses[i]) {
      for (let loser of wins[i]) {
        loses[loser].add(winner);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (wins[i].size + loses[i].size === n - 1) {
      answer++;
    }
  }
  return answer;
}
