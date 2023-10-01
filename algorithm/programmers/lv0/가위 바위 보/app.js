function solution(rsp) {
  var answer = '';
  for (let hand of rsp) {
    if (hand === '0') {
      answer += '5';
    } else if (hand === '2') {
      answer += '0';
    } else {
      answer += '2';
    }
  }
  return answer;
}
