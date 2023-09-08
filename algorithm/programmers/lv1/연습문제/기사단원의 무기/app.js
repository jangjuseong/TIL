function solution(number, limit, power) {
  var answer = 0;

  const weaponPower = Array(number).fill(0);
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          weaponPower[i - 1] += 1;
        } else {
          weaponPower[i - 1] += 2;
        }
      }
    }
  }

  answer += weaponPower
    .filter(item => item <= limit)
    .reduce((acc, cur) => acc + cur);
  answer += weaponPower.filter(item => item > limit).length * power;

  return answer;
}
