function solution(N, road, K) {
  const graph = new Map();

  for (let i = 1; i <= N; i++) {
    graph.set(i, []);
  }

  for (let [a, b, c] of road) {
    graph.get(a).push({ node: b, cost: c });
    graph.get(b).push({ node: a, cost: c });
  }

  const distances = new Array(N + 1).fill(Infinity);
  distances[1] = 0;

  const priorityQueue = [{ node: 1, cost: 0 }];
  while (priorityQueue.length > 0) {
    const { node, cost } = priorityQueue.shift();

    if (distances[node] < cost) continue;

    for (const { node: nextNode, cost: nextCost } of graph.get(node)) {
      const totalCost = cost + nextCost;
      if (totalCost < distances[nextNode]) {
        distances[nextNode] = totalCost;
        priorityQueue.push({ node: nextNode, cost: totalCost });
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= N; i++) {
    if (distances[i] <= K) {
      answer++;
    }
  }
  return answer;
}
