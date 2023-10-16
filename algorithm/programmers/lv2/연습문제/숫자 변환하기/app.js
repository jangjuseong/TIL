function solution(x, y, n) {
  if (x > y) return -1;

  const visited = new Set();
  const queue = [{ value: y, steps: 0 }];

  while (queue.length > 0) {
    const { value, steps } = queue.shift();

    if (value === x) return steps;
    if (visited.has(value) || value < x) continue;

    visited.add(value);

    if (value % 3 === 0) {
      queue.push({ value: value / 3, steps: steps + 1 });
    }

    if (value % 2 === 0) {
      queue.push({ value: value / 2, steps: steps + 1 });
    }

    queue.push({ value: value - n, steps: steps + 1 });
  }

  return -1;
}
