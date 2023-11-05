function solution(k, d) {
  let result = 0;
  for (let x = 0; x <= d; x = x + k) {
    const maxY = Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2));
    const yCount = Math.floor(maxY / k) + 1;
    result += yCount;
  }
  return result;
}
