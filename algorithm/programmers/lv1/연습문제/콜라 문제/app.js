function solution(a, b, n) {
  let EmptyColaQuantity = n;
  let result = 0;
  while (EmptyColaQuantity >= a) {
    if (EmptyColaQuantity >= a) {
      let remainedCola = EmptyColaQuantity % a;
      let possibleCola = Math.floor(EmptyColaQuantity / a) * b;
      EmptyColaQuantity = possibleCola + remainedCola;

      result += possibleCola;
    }
  }
  return result;
}
