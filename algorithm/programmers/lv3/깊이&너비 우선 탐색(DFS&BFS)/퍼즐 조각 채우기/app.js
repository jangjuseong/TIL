function solution(gameBoard, table) {
  const size = gameBoard.length;

  const getString = block => block.map(row => row.join('')).join(',');

  const rotate = block => {
    let blockCopy = block.map(row => [...row]);
    return Array(3)
      .fill()
      .map(() => {
        blockCopy = blockCopy[0]
          .map((_, i) => blockCopy.map(row => row[i]))
          .reverse();
        return getString(blockCopy);
      });
  };

  const findBlocks = (board, row, col, number) => {
    const coord = [[row, col]];
    let count = 1;
    board[row][col] = -1;

    const dfs = (row, col) => {
      [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ].forEach(([dRow, dCol]) => {
        const nextRow = row + dRow,
          nextCol = col + dCol;
        if (
          nextRow >= 0 &&
          nextRow < size &&
          nextCol >= 0 &&
          nextCol < size &&
          board[nextRow][nextCol] === number
        ) {
          coord.push([nextRow, nextCol]);
          count++;
          board[nextRow][nextCol] = -1;
          dfs(nextRow, nextCol);
        }
      });
    };

    dfs(row, col);

    const block = Array.from(
      {
        length:
          Math.max(...coord.map(([row]) => row)) -
          Math.min(...coord.map(([row]) => row)) +
          1,
      },
      (_, i) =>
        Array.from({
          length:
            Math.max(...coord.map(([, col]) => col)) -
            Math.min(...coord.map(([, col]) => col)) +
            1,
        }).fill(0)
    );

    coord.forEach(
      ([blockRow, blockCol]) =>
        (block[blockRow - Math.min(...coord.map(([row]) => row))][
          blockCol - Math.min(...coord.map(([, col]) => col))
        ] = count)
    );
    return block;
  };

  const spaces = [],
    blocks = [];

  gameBoard.forEach((col, row) =>
    col.forEach((cell, col) => {
      if (cell === 0)
        spaces.push(getString(findBlocks(gameBoard, row, col, 0)));
      if (table[row][col] === 1) {
        const block = findBlocks(table, row, col, 1);
        blocks.push([getString(block), ...rotate(block)]);
      }
    })
  );

  return blocks.reduce((acc, blockVariations) => {
    const fillIndex = spaces.findIndex(space =>
      blockVariations.includes(space)
    );
    return fillIndex > -1
      ? acc + Number(spaces.splice(fillIndex, 1)[0].match(/[1-6]/)[0])
      : acc;
  }, 0);
}
