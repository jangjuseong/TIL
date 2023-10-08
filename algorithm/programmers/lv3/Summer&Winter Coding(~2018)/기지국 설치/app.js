function solution(n, stations, w) {
  let answer = 0;

  let prevStationEnd = 0;
  for (let i = 0; i < stations.length; i++) {
    const startCoverage = stations[i] - w - 1;
    const uncovered = startCoverage - prevStationEnd;

    if (uncovered > 0) {
      answer += Math.ceil(uncovered / (2 * w + 1));
    }
    prevStationEnd = stations[i] + w;
  }

  if (prevStationEnd < n) {
    answer += Math.ceil((n - prevStationEnd) / (2 * w + 1));
  }

  return answer;
}

// 원래 효율성 테스트 실패했었는데, 다시 하니까 통과..?
