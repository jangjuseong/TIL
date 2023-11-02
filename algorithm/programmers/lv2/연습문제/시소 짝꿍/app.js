function solution(weights) {
  let answer = 0;
  const cnt = new Map();

  weights.forEach(weight => {
    cnt.set(weight, (cnt.get(weight) || 0) + 1);
  });

  weights.forEach(weight => {
    const divisibleBy2 = weight % 2 === 0;
    const divisibleBy3 = weight % 3 === 0;

    // 1:2 비율 체크
    if (weight * 2 <= 1000) {
      answer += cnt.get(weight * 2) || 0;
    }

    // 2:3 비율 체크
    if (divisibleBy2 && (weight / 2) * 3 <= 1000) {
      answer += cnt.get((weight / 2) * 3) || 0;
    }

    // 3:4 비율 체크
    if (divisibleBy3 && (weight / 3) * 4 <= 1000) {
      answer += cnt.get((weight / 3) * 4) || 0;
    }
  });

  // 몸무게가 같은 경우 처리
  for (let i = 100; i <= 1000; i++) {
    if (cnt.has(i) && cnt.get(i) >= 2) {
      answer += (cnt.get(i) * (cnt.get(i) - 1)) / 2;
    }
  }

  return answer;
}
