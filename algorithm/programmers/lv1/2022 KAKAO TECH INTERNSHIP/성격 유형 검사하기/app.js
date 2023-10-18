function solution(survey, choices) {
  var answer = '';
  const score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) {
      if (choices[i] === 1) {
        score[survey[i].charAt(0)] += 3;
      } else if (choices[i] === 2) {
        score[survey[i].charAt(0)] += 2;
      } else {
        score[survey[i].charAt(0)] += 1;
      }
    } else if (choices[i] >= 5) {
      score[survey[i].charAt(1)] += choices[i] - 4;
    }
  }

  if (score['R'] === score['T']) {
    answer += 'R';
  } else {
    answer += score['R'] - score['T'] > 0 ? 'R' : 'T';
  }

  if (score['C'] === score['F']) {
    answer += 'C';
  } else {
    answer += score['C'] - score['F'] > 0 ? 'C' : 'F';
  }

  if (score['J'] === score['M']) {
    answer += 'J';
  } else {
    answer += score['J'] - score['M'] > 0 ? 'J' : 'M';
  }

  if (score['A'] === score['N']) {
    answer += 'A';
  } else {
    answer += score['A'] - score['N'] > 0 ? 'A' : 'N';
  }
  return answer;
}
