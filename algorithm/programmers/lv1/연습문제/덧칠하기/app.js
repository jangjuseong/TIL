function solution(n, m, section) {
  var answer = 0;

  const arr = Array.from({ length: n + 1 }, (_, i) => true);
  for (let value of section) {
    arr[value] = false;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === false) {
      answer++;

      for (let j = i; j < i + m; j++) {
        arr[j] = true;
      }
    }
  }

  return answer;
}
