function solution(dirs) {
  let x = 0,
    y = 0;
  let visited = new Set();

  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let dir of dirs) {
    let [dx, dy] = move[dir];
    let nx = x + dx,
      ny = y + dy;

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    let path1 = `${x}${y}${nx}${ny}`;
    let path2 = `${nx}${ny}${x}${y}`;

    if (!visited.has(path1)) {
      visited.add(path1);
      visited.add(path2);
    }

    x = nx;
    y = ny;
  }

  return visited.size / 2;
}
