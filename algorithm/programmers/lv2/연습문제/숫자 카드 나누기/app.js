function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findGCD(array) {
  return array.reduce((acc, cur) => gcd(acc, cur), 0);
}

function checkGCD(array, GCD) {
  return array.every(e => e % GCD !== 0) ? GCD : 0;
}

function solution(a, b) {
  const setA = [...new Set(a)];
  const setB = [...new Set(b)];

  const gcdA = findGCD(setA);
  const gcdB = findGCD(setB);

  const resultA = checkGCD(setB, gcdA);
  const resultB = checkGCD(setA, gcdB);

  return Math.max(resultA, resultB);
}
