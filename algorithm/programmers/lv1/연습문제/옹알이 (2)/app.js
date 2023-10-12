function solution(babbling) {
  var answer = 0;
  const canSpeak = ['aya', 'ye', 'woo', 'ma'];
  for (let word of babbling) {
    let isPossible = true;
    let w = word;
    let count = 0;
    let before = '-1';

    while (isPossible) {
      let ongal = false;

      for (let ong of canSpeak) {
        if (w.startsWith(ong) && before !== ong) {
          ongal = true;
          before = ong;
          w = w.slice(ong.length);
          if (w == false) answer++;
          break;
        }
      }
      if (ongal === false) break;
    }
  }

  return answer;
}
