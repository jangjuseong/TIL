function solution(n) {
  const countOnes = num => {
    return num
      .toString(2)
      .split('')
      .filter(bit => bit === '1').length;
  };

  const targetCount = countOnes(n);
  let number = n + 1;

  while (true) {
    if (countOnes(number) === targetCount) {
      return number;
    }
    number += 1;
  }
}
