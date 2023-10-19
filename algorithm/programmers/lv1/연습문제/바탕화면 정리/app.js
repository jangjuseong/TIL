function solution(wallpaper) {
  var answer = [];

  let minLeft = Infinity,
    minTop = Infinity,
    maxRight = -Infinity,
    maxBottom = -Infinity;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (i < minTop) minTop = i;
        if (j < minLeft) minLeft = j;
        if (j >= maxRight) maxRight = j + 1;
        if (i >= maxBottom) maxBottom = i + 1;
      }
    }
  }

  answer.push(minTop, minLeft, maxBottom, maxRight);
  return answer;
}
