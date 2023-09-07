function solution(N, stages) {
  const failureRates = [];

  let totalPlayers = stages.length;

  for (let i = 1; i <= N; i++) {
    const failedPlayers = stages.filter(stage => stage === i).length;
    const failureRate = failedPlayers / totalPlayers;

    failureRates.push({ stage: i, rate: failureRate });
    totalPlayers -= failedPlayers;
  }

  failureRates.sort((a, b) => {
    if (a.rate !== b.rate) {
      return b.rate - a.rate;
    }
    return a.stage - b.stage;
  });

  return failureRates.map(entry => entry.stage);
}
