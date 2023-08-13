function solution(s) {
  let transformations = 0;
  let zeroRemoved = 0;

  while (s !== '1') {
    let zeroCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        zeroCount++;
      }
    }
    zeroRemoved += zeroCount;

    s = (s.length - zeroCount).toString(2);
    transformations++;
  }

  return [transformations, zeroRemoved];
}
