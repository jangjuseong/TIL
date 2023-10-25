function solution(orders, course) {
  const countCombination = {};

  function combination(arr, start, targetNum, selected) {
    if (targetNum === 0) {
      const sorted = selected.sort().join('');
      countCombination[sorted] = (countCombination[sorted] || 0) + 1;
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination(arr, i + 1, targetNum - 1, selected.concat(arr[i]));
    }
  }

  orders = orders.map(order => order.split('').sort());

  for (const order of orders) {
    for (const num of course) {
      if (order.length >= num) {
        combination(order, 0, num, []);
      }
    }
  }

  const result = {};
  for (const num of course) {
    result[num] = [];
  }

  for (const [comb, count] of Object.entries(countCombination)) {
    if (count > 1) {
      const len = comb.length;
      if (!result[len].comb || count > result[len].count) {
        result[len] = { count, comb: [comb] };
      } else if (count === result[len].count) {
        result[len].comb.push(comb);
      }
    }
  }

  const answer = [];
  for (const key in result) {
    if (result[key].comb) {
      answer.push(...result[key].comb);
    }
  }

  return answer.sort();
}
