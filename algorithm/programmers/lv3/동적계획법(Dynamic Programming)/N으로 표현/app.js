function solution(N, number) {
  if (N === number) {
    return 1;
  }

  const dp = Array.from({ length: 8 }, () => new Set());
  for (let i = 0; i < 8; i++) {
    dp[i].add(Number(String(N).repeat(i + 1)));
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (const op1 of dp[j]) {
        for (const op2 of dp[i - j - 1]) {
          dp[i].add(op1 + op2);
          dp[i].add(op1 - op2);
          dp[i].add(op2 - op1);
          dp[i].add(op1 * op2);
          if (op2 !== 0) {
            dp[i].add(Math.floor(op1 / op2));
          }
          if (op1 !== 0) {
            dp[i].add(Math.floor(op2 / op1));
          }
        }
      }
    }
    if (dp[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
