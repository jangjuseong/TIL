function solution(m, n, puddles) {
  var answer = 0;
  const MOD = 1000000007;
  const graph = Array.from({ length: m }, () => Array(n).fill(0));
  for (const [x, y] of puddles) {
    graph[x - 1][y - 1] = -1;
  }

  graph[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      if (graph[i][j] === -1) {
        graph[i][j] = 0;
        continue;
      }

      if (i > 0) graph[i][j] = (graph[i][j] + graph[i - 1][j]) % MOD;
      if (j > 0) graph[i][j] = (graph[i][j] + graph[i][j - 1]) % MOD;
    }
  }

  return graph[m - 1][n - 1];
}
