function removeSharp(string) {
  const hash = { C: 'H', D: 'I', F: 'J', G: 'K', A: 'L' };
  let newM = string.split('');

  for (let i = 0; i < newM.length; i++) {
    if (newM[i] === '#') newM[i - 1] = hash[newM[i - 1]];
  }

  newM = newM.filter(i => i !== '#').join('');
  return newM;
}

function solution(m, musicinfos) {
  m = removeSharp(m);

  const musicMap = [];
  for (let info of musicinfos) {
    let [startTime, endTime, title, melody] = info.split(',');
    melody = removeSharp(melody);
    const originalTime = melody.length;

    const calPlayTime = (startTime, endTime) => {
      let [startHr, startMin] = startTime.split(':').map(Number);
      let [endHr, endMin] = endTime.split(':').map(Number);
      return endHr * 60 + endMin - (startHr * 60 + startMin);
    };

    let playTime = calPlayTime(startTime, endTime);
    let playCycle = Math.floor(playTime / originalTime);
    let restPlayTime = playTime % originalTime;
    let totalPlayedMelody = '';
    if (playCycle < 1) {
      totalPlayedMelody = melody.slice(0, playTime);
    } else {
      for (let i = 0; i < playCycle; i++) {
        totalPlayedMelody += melody;
      }
      totalPlayedMelody += melody.slice(0, restPlayTime);
    }
    musicMap.push([title, totalPlayedMelody, playTime]);
  }

  let subArr = [];
  let maxLength = 0;

  for (let music of musicMap) {
    if (music[1].includes(m)) {
      subArr.push(music);

      maxLength = Math.max(maxLength, music[2]);
    }
  }

  if (subArr.length === 0) return `(None)`;

  for (let sub of subArr) {
    if (sub[2] === maxLength) {
      return sub[0];
    }
  }
}
