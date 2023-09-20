function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let camera = -30001;
  for (let route of routes) {
    if (camera < route[0]) {
      camera = route[1];
      answer++;
    }
  }

  return answer;
}
