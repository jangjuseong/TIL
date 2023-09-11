function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let queue = [[0, 0, 1]];
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] === 0) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, count + 1]);
    }
  }

  return -1;
}
