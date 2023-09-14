function solution(lottos, win_nums) {
  let alreadySameValue = 0;

  function score(n) {
    switch (n) {
      case 6:
        return 1;
      case 5:
        return 2;
      case 4:
        return 3;
      case 3:
        return 4;
      case 2:
        return 5;
      case 1:
        return 6;
      case 0:
        return 6;
    }
  }
  for (let lotto of lottos) {
    if (lotto === 0) {
      continue;
    }
    for (let i = 0; i < win_nums.length; i++) {
      if (lotto === win_nums[i]) {
        alreadySameValue += 1;
        lottos = lottos.filter(i => i !== lotto);
        win_nums = win_nums.filter(i => i !== lotto);
      }
    }
  }

  return [
    score(alreadySameValue + lottos.filter(i => i === 0).length),
    score(alreadySameValue),
  ];
}
