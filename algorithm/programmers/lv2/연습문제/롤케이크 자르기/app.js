function solution(topping) {
  const n = topping.length;
  let prefixUniqueToppings = new Array(n).fill(0);
  let suffixUniqueToppings = new Array(n).fill(0);

  let toppingSet = new Set();
  for (let i = 0; i < n; i++) {
    toppingSet.add(topping[i]);
    prefixUniqueToppings[i] = toppingSet.size;
  }

  toppingSet.clear();
  for (let i = n - 1; i >= 0; i--) {
    toppingSet.add(topping[i]);
    suffixUniqueToppings[i] = toppingSet.size;
  }

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (prefixUniqueToppings[i] === suffixUniqueToppings[i + 1]) count++;
  }

  return count;
}
