function solution(name, yearning, photo) {
  let answer = [];

  let cache = new Map();
  for (let i = 0; i < name.length; i++) {
    cache.set(name[i], yearning[i]);
  }
  for (let i = 0; i < photo.length; i++) {
    answer[i] = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (cache.has(photo[i][j])) {
        answer[i] += cache.get(photo[i][j]);
      }
    }
  }

  return answer;
}
