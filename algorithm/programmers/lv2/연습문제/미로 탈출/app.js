function findStartPoint(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 'S') return [i, j];
    }
  }
}

function findExitPoint(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 'E') return [i, j];
    }
  }
}

function findLeverPoint(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 'L') return [i, j];
    }
  }
}

function solution(maps) {
  maps = maps.map(item => item.split(''));
  const leverVisited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );
  const exitVisited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const startPoint = findStartPoint(maps);
  const leverPoint = findLeverPoint(maps);
  const exitPoint = findExitPoint(maps);

  const bfs = (start, target, visited, flag) => {
    let queue = [];
    queue.push([...start, 0]);
    let isTarget = false;
    let results = [];

    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      count++;
      if (x === target[0] && y === target[1]) {
        isTarget = true;
        results.push(count - 1);
      }

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          (maps[nx][ny] === 'O' ||
            maps[nx][ny] === 'E' ||
            maps[nx][ny] === 'L' ||
            maps[nx][ny] === 'S') &&
          visited[nx][ny] === false
        ) {
          queue.push([nx, ny, count]);
          visited[nx][ny] = true;
        }
      }
    }

    if (!isTarget) return -1;
    else return Math.min(...results);
  };

  const leverExplored = bfs(startPoint, leverPoint, leverVisited, 'L');
  if (leverExplored !== -1) {
    const exitExplored = bfs(leverPoint, exitPoint, exitVisited, 'E');
    if (exitExplored !== -1) {
      return leverExplored + exitExplored;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}
