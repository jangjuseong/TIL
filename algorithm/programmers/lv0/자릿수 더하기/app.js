function solution(n) {
  var answer = 0;
  n = n.toString();
  for (let s of n) {
    answer += Number(s);
  }
  return answer;
}
