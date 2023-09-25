function solution(participant, completion) {
  const hash = {};
  for (let player of participant) {
    if (!hash[player]) {
      hash[player] = 1;
    } else {
      hash[player]++;
    }
  }

  for (let p of completion) {
    if (hash[p] === 1) {
      delete hash[p];
    } else {
      hash[p]--;
    }
  }
  let answer = '';
  for (let key in hash) {
    answer = key;
  }

  return answer;
}
