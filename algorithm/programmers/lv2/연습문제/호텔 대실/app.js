function solution(book_time) {
  var answer = 1;
  let times = [];

  for (let time of book_time) {
    let [shr, smin] = time[0].split(':').map(Number);
    let [ehr, emin] = time[1].split(':').map(Number);
    times.push([shr * 60 + smin, ehr * 60 + emin]);
  }

  times.sort((a, b) => a[0] - b[0]);

  let endTimes = [times[0][1]];
  for (let i = 1; i < times.length; i++) {
    let assigned = false;
    for (let j = 0; j < endTimes.length; j++) {
      if (times[i][0] >= endTimes[j] + 10) {
        endTimes[j] = times[i][1];
        assigned = true;
        break;
      }
    }
    if (!assigned) {
      endTimes.push(times[i][1]);
    }
  }

  return endTimes.length;
}
