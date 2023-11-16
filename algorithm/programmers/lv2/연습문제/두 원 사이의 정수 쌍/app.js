function getOuterCoor(r) {
  let count = 0;
  for (let x = 1; x <= r; x++) {
    const y = Math.floor(Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2)));
    count += y;
  }
  count *= 4;
  count += r * 4 + 1;
  return count;
}

function getInnerCoor(r) {
  let count = 0;
  for (let x = 1; x <= r; x++) {
    const before = Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2));
    const after = Math.floor(before);
    if (before === after) {
      count += after - 1;
    } else {
      count += after;
    }
  }
  count *= 4;
  count += r * 4 + 1;
  return count;
}

function solution(r1, r2) {
  var answer = 0;
  answer = getOuterCoor(r2) - getInnerCoor(r1);

  return answer;
}
