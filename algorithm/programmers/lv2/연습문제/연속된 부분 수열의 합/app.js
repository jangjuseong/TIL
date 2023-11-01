function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  let minLength = Infinity;
  let answer = [];
  while (start < sequence.length) {
    if (sum === k) {
      if (end - start < minLength) {
        answer = [start, end];
        minLength = end - start;
      } else if (end - start === minLength && start < answer[0]) {
        answer = [start, end];
      }
    }

    if (sum <= k) {
      end++;
      sum += sequence[end];
    } else {
      sum -= sequence[start];
      start++;
    }
  }
  return answer;
}
