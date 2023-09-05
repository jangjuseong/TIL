function solution(n) {
  let arr = Array.from({ length: n + 1 }, (_, i) => i);
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;

    count++;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return count;
}
