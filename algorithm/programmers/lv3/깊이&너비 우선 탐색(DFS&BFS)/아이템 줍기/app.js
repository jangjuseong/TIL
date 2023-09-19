function solution(rectangle, characterX, characterY, itemX, itemY) {
  let answer = 0;
  const graph = Array.from({ length: 101 }, () => Array(101).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (const [x1, y1, x2, y2] of rectangle) {
    for (let i = x1 * 2; i <= 2 * x2; i++) {
      for (let j = y1 * 2; j <= 2 * y2; j++) {
        if (i === x1 * 2 || i === x2 * 2 || j === y1 * 2 || j === y2 * 2) {
          if (graph[i][j] === 0) {
            graph[i][j] = 1;
          }
        } else {
          graph[i][j] = 2;
        }
      }
    }
  }

  const visited = Array.from({ length: 101 }, () => Array(101).fill(false));
  const queue = [[characterX * 2, characterY * 2, 0]];
  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === itemX * 2 && y === itemY * 2) {
      answer = count;
      return answer / 2;
    }

    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx <= 100 && ny >= 0 && ny <= 100) {
        if (graph[nx][ny] === 1 && visited[nx][ny] === false) {
          queue.push([nx, ny, count + 1]);
        }
      }
    }
  }
}
