function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const greatestCommonDivisor = gcd(w, h);

  const notUsable = w + h - greatestCommonDivisor;
  const total = w * h;
  const answer = total - notUsable;

  return answer;
}
