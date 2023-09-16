function solution(s) {
  let answer = 0;
  let isFin = false;

  while (s.length >= 1) {
    if (s.length === 1) {
      answer++;
      break;
    }

    if (isFin) {
      break;
    }

    let x = s.charAt(0);
    let countX = 1;
    let countNotX = 0;

    for (let i = 1; i < s.length; i++) {
      if (s.charAt(i) === x) {
        countX++;
      } else {
        countNotX++;
      }

      if (countX === countNotX) {
        answer++;
        s = s.slice(i + 1);
        break;
      }

      if (i === s.length - 1) {
        answer++;
        isFin = true;
        break;
      }
    }
  }

  return answer;
}
