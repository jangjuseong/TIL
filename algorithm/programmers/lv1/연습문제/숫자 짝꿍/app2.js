function solution(X, Y) {
  let commonNumbers = [];
  const hash = {};

  for (let x of X) {
    if (hash[x] === undefined) {
      hash[x] = 1;
    } else {
      hash[x]++;
    }
  }

  for (let y of Y) {
    if (!hash[y]) {
      continue;
    } else {
      commonNumbers.push(y);
      hash[y]--;
    }
  }

  if (commonNumbers.length === 0) {
    return '-1';
  } else if (commonNumbers.every(e => e === '0')) {
    return '0';
  } else {
    commonNumbers.sort().reverse();
    return commonNumbers.join('');
  }
}
