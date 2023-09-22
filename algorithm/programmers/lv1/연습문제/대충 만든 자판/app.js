function solution(keymap, targets) {
  const answer = Array(targets.length).fill(0);
  const hash = {};
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!hash[key[i]]) {
        hash[key[i]] = i + 1;
      } else if (hash[key[i]] > i + 1) {
        hash[key[i]] = i + 1;
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      if (!hash[targets[i][j]]) {
        answer[i] = -1;
        break;
      }

      answer[i] += hash[targets[i][j]];
    }
  }

  return answer;
}
