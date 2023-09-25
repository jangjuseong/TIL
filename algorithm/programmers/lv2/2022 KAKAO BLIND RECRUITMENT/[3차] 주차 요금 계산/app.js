function solution(fees, records) {
  var answer = [];
  const hash = {};
  const calHash = {};
  const arr = [];
  for (let record of records) {
    let [time, carNum, io] = record.split(' ');
    if (io === 'IN') {
      hash[carNum] = time;
    } else {
      const [oH, oM] = time.split(':').map(Number);
      const [iH, iM] = hash[carNum].split(':').map(Number);
      const calMin = oH * 60 + oM - (iH * 60 + iM);
      delete hash[carNum];

      if (!calHash[carNum]) {
        calHash[carNum] = calMin;
      } else {
        calHash[carNum] += calMin;
      }
    }
  }
  for (let key in hash) {
    const [iH, iM] = hash[key].split(':').map(Number);
    const remainTime = 23 * 60 + 59 - (iH * 60 + iM);
    if (!calHash[key]) {
      calHash[key] = remainTime;
    } else {
      calHash[key] += remainTime;
    }
  }
  const [baseTime, baseFee, addTime, addFee] = fees.map(Number);

  for (let key in calHash) {
    if (calHash[key] <= baseTime) {
      arr.push([key, baseFee]);
    } else {
      const add = Math.ceil((calHash[key] - baseTime) / addTime) * addFee;
      arr.push([key, baseFee + add]);
    }
  }

  arr.sort((a, b) => a[0] - b[0]);

  for (let i of arr) {
    answer.push(i[1]);
  }
  return answer;
}
