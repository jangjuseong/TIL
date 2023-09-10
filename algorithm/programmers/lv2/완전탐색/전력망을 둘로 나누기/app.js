function solution(n, wires) {
  // 그래프 초기화
  const graph = Array.from({ length: n }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1 - 1].push(v2 - 1);
    graph[v2 - 1].push(v1 - 1);
  }

  let answer = Number.MAX_SAFE_INTEGER;

  // DFS 함수 정의
  function dfs(v, parent) {
    let total = 1;
    for (const neighbor of graph[v]) {
      if (neighbor !== parent) {
        total += dfs(neighbor, v);
      }
    }
    const other = n - total;
    const diff = Math.abs(total - other);
    answer = Math.min(answer, diff);
    return total;
  }

  // 모든 노드에서 DFS를 시작하여 최소 차이를 찾음
  for (let i = 0; i < n; i++) {
    dfs(i, -1);
  }

  return answer;
}
