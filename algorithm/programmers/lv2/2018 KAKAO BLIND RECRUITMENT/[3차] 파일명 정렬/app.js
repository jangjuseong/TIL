function solution(files) {
  let body = [];

  for (let file of files) {
    let numberIndex = [];
    for (let i = 0; i < file.length; i++) {
      if (Number.isInteger(Number(file[i])) && file[i] !== ' ') {
        numberIndex.push(i);
      }
    }
    let startNumberIndex = numberIndex[0];
    let cutIndex = -1;
    for (let i = 1; i < numberIndex.length; i++) {
      if (numberIndex[i - 1] + 1 !== numberIndex[i])
        cutIndex = numberIndex[i - 1];
    }
    if (cutIndex === -1) cutIndex = numberIndex[numberIndex.length - 1];

    body.push([
      file.slice(0, startNumberIndex),
      file.slice(startNumberIndex, cutIndex + 1),
      file.slice(cutIndex + 1),
    ]);
  }

  body = body.sort((a, b) => {
    if (a[0].toLowerCase() !== b[0].toLowerCase()) {
      return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    } else if (Number(a[1]) !== Number(b[1])) {
      return Number(a[1]) - Number(b[1]);
    }
  });

  return body.map(item => item.join(''));
}
