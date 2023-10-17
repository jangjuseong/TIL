function solution(players, callings) {
  const playerIndices = {};
  players.forEach((player, index) => {
    playerIndices[player] = index;
  });

  for (let called of callings) {
    let calledIndex = playerIndices[called];
    let swapIndex = calledIndex - 1;

    let temp = players[calledIndex];
    players[calledIndex] = players[calledIndex - 1];
    players[swapIndex] = temp;

    playerIndices[temp]--;
    playerIndices[players[calledIndex]]++;
  }
  return players;
}
