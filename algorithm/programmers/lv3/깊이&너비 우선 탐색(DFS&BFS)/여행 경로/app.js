function solution(tickets) {
  const graph = {};
  for (const [dep, arr] of tickets) {
    if (!graph[dep]) {
      graph[dep] = [];
    }
    graph[dep].push(arr);
  }

  for (const dep in graph) {
    graph[dep].sort().reverse();
  }
  const stack = ['ICN'];
  const path = [];

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    if (graph[current] && graph[current].length > 0) {
      stack.push(graph[current].pop());
    } else {
      path.push(stack.pop());
    }
  }
  return path.reverse();
}
