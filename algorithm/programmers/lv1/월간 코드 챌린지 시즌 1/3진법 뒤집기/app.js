function solution(n) {
  var answer = 0;

  let ternary = '';

  while (n > 0) {
    ternary = (n % 3) + ternary;
    n = Math.floor(n / 3);
  }

  const reversedTernary = ternary.split('').reverse().join('');

  for (let i = 0; i < reversedTernary.length; i++) {
    answer +=
      parseInt(reversedTernary[i]) *
      Math.pow(3, reversedTernary.length - 1 - i);
  }

  return answer;
}
