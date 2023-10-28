function solution(storey) {
  let answer = 0;

  while (storey !== 0) {
    let n = storey % 10;
    storey = Math.floor(storey / 10);

    if (n >= 6) {
      storey += 1;
      answer += 10 - n;
    } else if (n === 5 && Math.floor(storey % 10) >= 5) {
      storey += 1;
      answer += 10 - n;
    } else {
      answer += n;
    }
  }

  return answer;
}
