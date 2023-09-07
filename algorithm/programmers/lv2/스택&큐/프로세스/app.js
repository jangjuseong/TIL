function solution(priorities, location) {
  var answer = 0;
  let process = [];

  for (let i = 0; i < priorities.length; i++) {
    process.push({ index: i, priority: priorities[i] });
  }

  while (process.length > 0) {
    const current = process.shift();
    if (process.some(item => item.priority > current.priority)) {
      process.push(current);
    } else {
      answer++;
      if (current.index === location) {
        return answer;
      }
    }
  }
}
