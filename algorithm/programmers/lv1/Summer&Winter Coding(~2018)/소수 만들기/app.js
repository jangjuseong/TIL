function solution(nums) {
  let answer = 0;
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        array.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (let number of array) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        continue;
      }
    }
    if (isPrime) {
      answer += 1;
    }
  }

  return answer;
}
