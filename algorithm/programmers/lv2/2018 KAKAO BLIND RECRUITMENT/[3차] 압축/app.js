function solution(msg) {
  let dict = {};
  let count = 1;

  for (let i = 65; i <= 90; i++) {
    dict[String.fromCharCode(i)] = count++;
  }

  let answer = [];
  let w = '';
  for (let c of msg) {
    if (dict[w + c] !== undefined) {
      w = w + c;
    } else {
      answer.push(dict[w]);
      dict[w + c] = count++;
      w = c;
    }
  }

  if (w !== '') answer.push(dict[w]);
  return answer;
}
