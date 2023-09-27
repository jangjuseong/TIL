function solution(n, works) {
  var answer = 0;

  works.sort((a, b) => a - b);

  while (n > 0) {
    if (works[0] === 0) {
      return 0;
    }
    const max = Math.max(...works);

    for (let i = works.length - 1; i >= 0; i--) {
      if (n === 0) {
        break;
      }
      if (works[i] === max) {
        works[i]--;
        n--;
      } else {
        break;
      }
    }
  }

  for (let work of works) {
    answer += Math.pow(work, 2);
  }

  return answer;
}
