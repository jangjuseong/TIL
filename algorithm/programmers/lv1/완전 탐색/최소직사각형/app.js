function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let size of sizes) {
    const [x, y] = size;
    const max = Math.max(x, y);
    const min = Math.min(x, y);
    if (max > maxWidth) maxWidth = max;
    if (min > maxHeight) maxHeight = min;
  }
  return maxWidth * maxHeight;
}
