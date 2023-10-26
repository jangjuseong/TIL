function solution(n, m, section) {
  let answer = 0;
  let start = 0;

  while (start < section.length) {
    answer += 1;
    let end = start;

    while (end < section.length && section[end] <= section[start] + m - 1) {
      end += 1;
    }
    start = end;
  }

  return answer;
}
