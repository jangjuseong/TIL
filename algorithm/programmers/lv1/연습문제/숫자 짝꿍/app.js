function solution(X, Y) {
  let string = '';
  const hashX = {};
  const hashY = {};

  for (let str of X) {
    if (str in hashX) {
      hashX[str]++;
    } else {
      hashX[str] = 1;
    }
  }

  for (let str of Y) {
    if (str in hashY) {
      hashY[str]++;
    } else {
      hashY[str] = 1;
    }
  }

  for (let key in hashX) {
    if (key in hashY) {
      let minNum = Math.min(hashX[key], hashY[key]);
      for (let i = 0; i < minNum; i++) {
        string += key;
      }
    }
  }

  string = string.split('').sort().reverse().join('');
  if (string === '') {
    return '-1';
  } else if (string.charAt(0) === '0') {
    return '0';
  } else {
    return string;
  }
}
