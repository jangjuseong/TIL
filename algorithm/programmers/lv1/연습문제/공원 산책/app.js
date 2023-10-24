function findStartPoint(parkMap) {
  for (let i = 0; i < parkMap.length; i++) {
    for (let j = 0; j < parkMap[i].length; j++) {
      if (parkMap[i][j] === 'S') {
        return [i, j];
      }
    }
  }
}

function checkAndReturnNext(park, nowPos, route) {
  let [dir, step] = route.split(' ');
  const H = park.length;
  const W = park[0].length;
  step = +step;
  const dirHash = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  let tempPos = [...nowPos];
  let canGo = true;

  while (step > 0) {
    let nx = dirHash[dir][0] + tempPos[0];
    let ny = dirHash[dir][1] + tempPos[1];
    if (nx < 0 || ny < 0 || nx >= H || ny >= W || park[nx][ny] === 'X') {
      canGo = false;
      break;
    }
    tempPos = [nx, ny];
    step--;
  }

  if (canGo) return tempPos;
  return nowPos;
}

function solution(park, routes) {
  let point = findStartPoint(park);
  for (let route of routes) {
    point = checkAndReturnNext(park, point, route);
  }
  return point;
}
