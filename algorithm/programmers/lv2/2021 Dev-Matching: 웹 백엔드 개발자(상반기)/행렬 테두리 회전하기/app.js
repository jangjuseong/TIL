function solution(rows, columns, queries) {
  var answer = [];
  let graph = Array.from({ length: rows }, () => Array(columns).fill(0));
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      graph[i][j] = num++;
    }
  }

  for (let query of queries) {
    const [x1, y1, x2, y2] = query;
    let arr = [];
    const x1y1 = graph[x1 - 1][y1 - 1];
    arr.push(x1y1);
    for (let x = x1; x < x2; x++) {
      arr.push(graph[x][y1 - 1]);
      graph[x - 1][y1 - 1] = graph[x][y1 - 1];
    }
    for (let y = y1; y < y2; y++) {
      arr.push(graph[x2 - 1][y]);
      graph[x2 - 1][y - 1] = graph[x2 - 1][y];
    }
    for (let x = x2; x > x1; x--) {
      arr.push(graph[x - 2][y2 - 1]);
      graph[x - 1][y2 - 1] = graph[x - 2][y2 - 1];
    }
    for (let y = y2; y > y1; y--) {
      arr.push(graph[x1 - 1][y - 2]);
      graph[x1 - 1][y - 1] = graph[x1 - 1][y - 2];
    }
    graph[x1 - 1][y1] = x1y1;
    answer.push(Math.min(...arr));
  }
  return answer;
}
