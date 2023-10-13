function solution(ingredient) {
  var answer = 0;
  let stack = [];

  for (let stuff of ingredient) {
    stack.push(stuff);

    if (
      stack.length >= 4 &&
      JSON.stringify(stack.slice(stack.length - 4)) ===
        JSON.stringify([1, 2, 3, 1])
    ) {
      stack.splice(stack.length - 4);
      answer++;
    }
  }

  return answer;
}
