function solution(queue1, queue2) {
  let operations = 0;
  const maxOperations = (queue1.length + queue2.length) * 2;

  let idx1 = 0,
    idx2 = 0;
  let sumQueue1 = queue1.reduce((acc, val) => acc + val, 0);
  let sumQueue2 = queue2.reduce((acc, val) => acc + val, 0);

  while (operations < maxOperations && sumQueue1 !== sumQueue2) {
    if (sumQueue1 > sumQueue2) {
      const element = queue1[idx1++];
      sumQueue1 -= element;
      sumQueue2 += element;
      queue2.push(element);
    } else {
      const element = queue2[idx2++];
      sumQueue1 += element;
      sumQueue2 -= element;
      queue1.push(element);
    }
    operations++;
  }

  return sumQueue1 === sumQueue2 ? operations : -1;
}
