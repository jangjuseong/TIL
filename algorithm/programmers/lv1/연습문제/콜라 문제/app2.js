function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let canChange = Math.floor(n / a);
    let getBack = canChange * b;
    n = n - canChange * a + getBack;
    answer += getBack;
  }
  return answer;
}
