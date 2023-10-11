function solution(gems) {
  let totalGems = new Set(gems).size;
  let gemMap = new Map();
  let start = 0,
    end = 0;
  let answer = [0, gems.length - 1];

  while (end < gems.length) {
    gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);

    while (gemMap.size === totalGems) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }

      if (gemMap.get(gems[start]) === 1) {
        gemMap.delete(gems[start]);
      } else {
        gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
      }
      start++;
    }
    end++;
  }
  return [answer[0] + 1, answer[1] + 1];
}
