function solution(prices) {
  let answer = [];
  let length = prices.length - 1;
  for (let i = 0; i < prices.length - 1; i++) {
    answer[i] = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer[i] = j - i;
        break;
      }
    }
    if (answer[i] === false) {
      answer[i] = length - i;
    }
  }
  answer[length] = 0;

  return answer;
}
