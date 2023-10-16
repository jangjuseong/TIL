function getNextNumber(x) {
  if (x % 2 === 0) return x + 1;

  const bit = '0' + x.toString(2);
  const idx = bit.lastIndexOf('0');
  return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
}

function solution(numbers) {
  return numbers.map(getNextNumber);
}
