function dfs(k, dungeons, visited) {
  let maxDungeons = 0;
  // console.log(visited)

  for (let i = 0; i < dungeons.length; i++) {
    console.log(i, visited);
    if (visited[i]) continue; // 이미 탐험한 던전은 건너뜁니다.

    const [minReq, cost] = dungeons[i];

    // 피로도가 충분한 경우만 탐험합니다.
    if (k >= minReq) {
      visited[i] = true; // 던전을 탐험했다고 표시합니다.
      maxDungeons = Math.max(maxDungeons, 1 + dfs(k - cost, dungeons, visited));
      visited[i] = false; // 탐험 표시를 원상태로 돌립니다.
    }
  }

  return maxDungeons;
}

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  return dfs(k, dungeons, visited);
}
