function solution(nums) {
  var answer = 0;
  const half = nums.length / 2;
  const hash = {};
  let key = 0;
  for (let num of nums) {
    if (hash[num] === undefined) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  }

  for (let keys in hash) {
    key++;
  }

  if (key >= half) {
    answer = half;
  } else {
    answer = key;
  }

  return answer;
}
