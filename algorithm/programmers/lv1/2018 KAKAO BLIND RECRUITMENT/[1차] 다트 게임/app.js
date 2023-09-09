function solution(dartResult) {
  let answer = 0;
  let scores = [];
  let tempScore = '';

  for (let i = 0; i < dartResult.length; i++) {
    let char = dartResult[i];

    if (char >= '0' && char <= '9') {
      tempScore += char;
    } else if (char === 'S' || char === 'D' || char === 'T') {
      let score = parseInt(tempScore);
      tempScore = '';

      if (char === 'D') {
        score = Math.pow(score, 2);
      } else if (char === 'T') {
        score = Math.pow(score, 3);
      }

      scores.push(score);
    } else if (char === '*' || char === '#') {
      let index = scores.length - 1;

      if (char === '*') {
        scores[index] *= 2;

        if (index > 0) {
          scores[index - 1] *= 2;
        }
      } else {
        scores[index] *= -1;
      }
    }
  }

  answer = scores.reduce((acc, cur) => acc + cur);

  return answer;
}
