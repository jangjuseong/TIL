function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => b - a);

  let min = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    if (B.length === 0) {
      break;
    }
    let temp = B.pop();
    if (temp > A[i]) {
      answer++;
      continue;
    } else {
      while (true) {
        if (B.length === 0) {
          break;
        }
        temp = B.pop();
        if (temp > A[i]) {
          answer++;
          break;
        }
      }
    }
  }

  return answer;
}
