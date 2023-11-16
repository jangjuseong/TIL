function solution(cards) {
  let visited = new Array(cards.length).fill(false);
  let groupSizes = [];

  for (let i = 0; i < cards.length; i++) {
    if (!visited[i]) {
      let size = 0;
      let current = i;

      while (!visited[current]) {
        console.log(visited);
        visited[current] = true;
        current = cards[current] - 1;
        size++;
      }

      groupSizes.push(size);
    }
  }

  if (groupSizes.length < 2) {
    return 0; // 두 개 이상의 그룹이 없으면 점수는 0입니다.
  }

  groupSizes.sort((a, b) => b - a); // 그룹 크기를 내림차순으로 정렬합니다.
  return groupSizes[0] * groupSizes[1]; // 가장 큰 두 그룹의 크기를 곱합니다.
}
