function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function solution(n, costs) {
  let answer = 0;
  const parent = new Array(n).fill(0).map((_, index) => index);

  costs.sort((a, b) => a[2] - b[2]);

  for (const [a, b, cost] of costs) {
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      answer += cost;
    }
  }
  return answer;
}
