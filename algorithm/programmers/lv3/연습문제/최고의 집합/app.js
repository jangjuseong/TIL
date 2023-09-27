function solution(n, s) {
  var answer = [];
  if (n > s) {
    return [-1];
  }

  const mod = s % n;

  if (mod === 0) {
    const divided = s / n;
    for (let i = 0; i < n; i++) {
      answer.push(divided);
    }
  } else {
    const divided = Math.floor(s / n);
    for (let i = 0; i < n; i++) {
      answer.push(divided);
    }

    for (let i = 0; i < mod; i++) {
      answer[i]++;
    }

    answer.sort((a, b) => a - b);
  }

  return answer;
}
