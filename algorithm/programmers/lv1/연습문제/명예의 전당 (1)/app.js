function solution(k, score) {
  let answer = [];
  let hallOfFame = [];
  for (let s of score) {
    if (hallOfFame.length < k) {
      hallOfFame.push(s);
      answer.push(Math.min(...hallOfFame));
    } else {
      let min = Math.min(...hallOfFame);
      let index = hallOfFame.indexOf(min);
      if (s > min) {
        hallOfFame[index] = s;
        answer.push(Math.min(...hallOfFame));
      } else {
        answer.push(Math.min(...hallOfFame));
      }
    }
  }

  return answer;
}
