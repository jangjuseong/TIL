function solution(n, t, m, p) {
  var answer = '';

  let stringLength = t * m;
  let convertedStr = '';

  for (let i = 0; i < stringLength; i++) {
    convertedStr += i.toString(n);
  }

  for (let i = p - 1; i < convertedStr.length; i += m) {
    if (answer.length === t) {
      break;
    }
    answer += convertedStr[i].toUpperCase();
  }

  return answer;
}
