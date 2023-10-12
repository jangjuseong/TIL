function canCross(stones, k, mid) {
  let count = 0;
  for (let stone of stones) {
    if (stone < mid) {
      count++;
    } else {
      count = 0;
    }
    if (count >= k) return false;
  }
  return true;
}

function solution(stones, k) {
  let start = 0;
  let end = 200000000;
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (canCross(stones, k, mid)) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}
