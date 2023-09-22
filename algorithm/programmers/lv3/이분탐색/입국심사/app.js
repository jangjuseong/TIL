function solution(n, times) {
  let minTime = 1;
  let maxTime = Math.max(...times) * n;
  let answer = maxTime;

  while (minTime <= maxTime) {
    let midTime = Math.floor((minTime + maxTime) / 2);
    console.log(minTime, maxTime, midTime);
    let peopleCount = times.reduce(
      (acc, time) => acc + Math.floor(midTime / time),
      0
    );

    if (peopleCount >= n) {
      answer = Math.min(answer, midTime);
      maxTime = midTime - 1;
    } else {
      minTime = midTime + 1;
    }
  }
  return answer;
}
