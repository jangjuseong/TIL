function solution(n, k, enemy) {
  return binarySearch();

  function binarySearch() {
    let left = 0;
    let right = enemy.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (canDefendUpTo(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function canDefendUpTo(mid) {
    let sortedEnemiesUpToMid = [...enemy]
      .slice(0, mid + 1)
      .sort((a, b) => a - b);
    let remainingSoldiers = n;

    for (let i = 0; i < sortedEnemiesUpToMid.length; i++) {
      let currentEnemy = sortedEnemiesUpToMid[i];

      if (currentEnemy <= remainingSoldiers) {
        remainingSoldiers -= currentEnemy;
      } else {
        return k >= sortedEnemiesUpToMid.length - i;
      }
    }
    return true;
  }
}
