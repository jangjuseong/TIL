function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => a - b);
  while (score.length >= m) {
    let value = 0;
    let min = Infinity;
    for (let i = 0; i < m; i++) {
      let temp = score.pop();
      min = Math.min(temp, min);
    }
    answer += min * m;
  }

  return answer;
}
