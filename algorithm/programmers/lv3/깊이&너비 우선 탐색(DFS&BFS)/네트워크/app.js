function solution(n, computers) {
  var answer = 0;
  const graph = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => false);

  for (let j = 0; j < computers.length; j++) {
    for (let i = 0; i < computers[j].length; i++) {
      if (j === i) {
        continue;
      } else if (computers[j][i] === 1) {
        graph[j].push(i);
      }
    }
  }

  const dfs = node => {
    if (node > n) return;
    visited[node] = true;

    for (v of graph[node]) {
      if (!visited[v]) {
        dfs(v);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    answer++;
    dfs(i);
  }
  return answer;
}
