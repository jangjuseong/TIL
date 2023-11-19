function solution(numbers) {
  let numberSum = numbers.reduce((acc, cur) => acc + cur);
  let totalSum = 45;

  return totalSum - numberSum;
}
