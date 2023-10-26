function solution(maps) {
  var answer = [];

  const height = maps.length;
  const width = maps[0].length;
  const graph = maps.map(item =>
    item.split('').map(cell => (cell !== 'X' ? +cell : 'X'))
  );
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );

  const bfs = ([i, j]) => {
    let queue = [];
    queue.push([i, j]);
    let area = 0;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (queue.length > 0) {
      let [x, y] = queue.shift();

      visited[x][y] = true;
      area += graph[x][y];

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= height ||
          ny >= width ||
          graph[nx][ny] === 'X' ||
          visited[nx][ny] === true
        ) {
          continue;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
    return area;
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (graph[i][j] !== 'X' && visited[i][j] === false) {
        answer.push(bfs([i, j]));
      }
    }
  }

  if (answer.length === 0) return [-1];

  return answer.sort((a, b) => a - b);
}
