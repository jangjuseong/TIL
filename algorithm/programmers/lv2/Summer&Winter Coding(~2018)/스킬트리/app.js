function solution(skill, skill_trees) {
  var answer = 0;
  const queue = [];
  for (let s of skill) {
    queue.push(s);
  }

  for (let skill of skill_trees) {
    let skillQueue = [];
    let temp = Array(...queue);
    let isFalse = false;
    for (let sub of skill) {
      if (queue.includes(sub)) {
        skillQueue.push(sub);
      }
    }
    for (let s of skillQueue) {
      if (s === temp[0]) {
        temp.shift();
      } else {
        isFalse = true;
      }
    }
    if (!isFalse) {
      answer++;
    }
  }
  return answer;
}
