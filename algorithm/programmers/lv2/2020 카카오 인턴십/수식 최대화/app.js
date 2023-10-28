function getPermutations(arr, num) {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map(permutation => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}

function calc(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 0;
  }
}

function calculate(nums, ops, order) {
  order.forEach(op => {
    while (ops.includes(op)) {
      const index = ops.indexOf(op);
      nums.splice(index, 2, calc(nums[index], nums[index + 1], op));
      ops.splice(index, 1);
    }
  });
  return nums[0];
}

function solution(expression) {
  const operators = ['+', '-', '*'];
  const operatorPermutations = getPermutations(operators, 3);
  let maxPrize = 0;

  operatorPermutations.forEach(order => {
    const nums = expression.split(/[^0-9]/).map(num => parseInt(num));
    const ops = expression.split(/[0-9]/).filter(op => op !== '');
    const result = calculate(nums, ops, order);
    const absResult = Math.abs(result);
    if (absResult > maxPrize) {
      maxPrize = absResult;
    }
  });

  return maxPrize;
}
