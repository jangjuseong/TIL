const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : `${__dirname}/../../example.txt`;
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const getHourDeg = (hour, min) => {
  let hourDeg = hour * 30;
  if (hourDeg >= 360) return hourDeg - 360 + min * 0.5;
  return hourDeg + min * 0.5;
};

const getMinDeg = min => {
  let minDeg = min * 6;
  if (minDeg === 360) return 0;
  return minDeg;
};

const getDegBetween = (hour, min) => {
  let hourPosition = getHourDeg(hour, min);
  let minPoisition = getMinDeg(min);

  return Math.min(
    Math.abs(hourPosition - minPoisition),
    360 - Math.abs(hourPosition - minPoisition)
  );
};

const makeStringTime = (hour, min) => {
  if (hour <= 9) {
    hour = '0' + String(hour);
  } else {
    hour = String(hour);
  }

  if (min <= 9) {
    min = '0' + String(min);
  } else {
    min = String(min);
  }

  return `${hour}:${min}`;
};

const T = inputs[0];
for (let i = 1; i <= T; i++) {
  const tempArr = [0, 0, 0, 0, 0];
  for (let j = 0; j < 5; j++) {
    let time = inputs[i].split(' ')[j];
    const hour = Number(time.slice(0, 2));
    const min = Number(time.slice(3));
    tempArr[j] = [j, getDegBetween(hour, min), hour, min];
  }
  tempArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[2] * 60 + a[3] - (b[2] * 60 + b[3]);
    } else {
      return a[1] - b[1];
    }
  });
  console.log(makeStringTime(tempArr[2][2], tempArr[2][3]));
}

/* 더 좋은 풀이
const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const T = Number(inputs[0]);

for (let i = 1; i <= T; i++) {
    const times = inputs[i].split(' ');
    const angles = times.map(time => {
        const [hour, minute] = time.split(':').map(Number);
        const minuteAngle = minute * 6;
        let hourAngle = (hour % 12 + minute / 60) * 30;
        let angle = Math.abs(hourAngle - minuteAngle);
        angle = Math.min(360 - angle, angle);
        return { time, angle };
    });

    angles.sort((a, b) => a.angle - b.angle || a.time.localeCompare(b.time));
    console.log(angles[2].time);
}
*/
