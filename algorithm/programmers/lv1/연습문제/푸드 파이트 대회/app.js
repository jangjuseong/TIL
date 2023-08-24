function solution(food) {
  let foodSequence = '0';
  for (let index = food.length - 1; index >= 1; index--) {
    let halfQuantity = Math.floor(food[index] / 2);
    let currentFoodString = '';
    if (halfQuantity > 0) {
      currentFoodString = String(index).repeat(halfQuantity);
      foodSequence = currentFoodString + foodSequence + currentFoodString;
    }
  }
  return foodSequence;
}
