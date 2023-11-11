function solution(babbling) {
  let answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];
  for (let bab of babbling) {
    let testWord = bab;
    let index = -1;

    while (testWord.length > 0) {
      let canSpeak = false;
      for (let i = 0; i < words.length; i++) {
        if (testWord.startsWith(words[i])) {
          if (index === i) {
            canSpeak = false;
            break;
          }
          testWord = testWord.slice(words[i].length);
          index = i;
          canSpeak = true;
          break;
        }
      }
      if (canSpeak && testWord.length === 0) {
        answer++;
      }
      if (!canSpeak) break;
    }
  }

  return answer;
}
