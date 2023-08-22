function solution(clothes) {
  let answer = 1;
  let map = new Map();

  // 해시에 숫자로 개수를 바로 넣기
  for (let i = 0; i < clothes.length; i++) {
    if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  }

  // 조합 가능한 경우의 수 계산하기
  for (let value of map.values()) {
    answer *= value + 1;
  }

  return answer - 1;
}
