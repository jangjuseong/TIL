function solution(k, ranges) {
  var answer = [];
  const dp = [[0, k, 0]]; //x좌표, y좌표, 넓이
  let count = 1;
  while (k > 1) {
    if (k % 2 === 0) {
      k /= 2;
      dp.push([count, k, dp[count - 1][2] + (dp[count - 1][1] + k) / 2]);
      count += 1;
    } else {
      k = k * 3 + 1;
      dp.push([count, k, dp[count - 1][2] + (dp[count - 1][1] + k) / 2]);
      count += 1;
    }
  }
  const n = dp.length - 1;

  for (let range of ranges) {
    let [a, b] = range;
    b = n + b;
    if (a > b) {
      answer.push(-1.0);
      continue;
    } else if (a === b) {
      answer.push(0.0);
    } else {
      answer.push(dp[b][2] - dp[a][2]);
    }
  }

  return answer;
}
