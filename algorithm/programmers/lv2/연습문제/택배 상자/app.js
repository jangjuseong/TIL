function solution(order) {
  const stack = [];
  let deliveryOrderIndex = 0;
  let result = 0;
  for (let i = 1; i <= order.length; i++) {
    if (i === order[deliveryOrderIndex]) {
      deliveryOrderIndex++;
      result++;

      while (
        stack.length > 0 &&
        stack[stack.length - 1] === order[deliveryOrderIndex]
      ) {
        if (stack[stack.length - 1] === order[deliveryOrderIndex]) {
          result++;
          deliveryOrderIndex++;
          stack.pop();
        }
      }
    } else {
      stack.push(i);
    }
  }
  return result;
}
