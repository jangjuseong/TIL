function solution(n, edge) {
  var answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(0);

  for (let i = 0; i < edge.length; i++) {
    let [a, b] = edge[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  visited[1] = true;

  const queue = [[1, 0]];
  while (queue.length > 0) {
    const [currentNode, count] = queue.shift();
    distance[currentNode] = count;
    for (let nextNode of graph[currentNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, count + 1]);
      }
    }
  }

  const maxNum = Math.max(...distance);
  return distance.filter(i => i === maxNum).length;
}
