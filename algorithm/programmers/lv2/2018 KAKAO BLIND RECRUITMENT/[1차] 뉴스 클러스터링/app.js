function solution(str1, str2) {
  function makeSets(str) {
    const set = [];
    for (let i = 0; i < str.length - 1; i++) {
      let piece = str.substring(i, i + 2).toUpperCase();
      if (piece.match(/[A-Z]{2}/)) set.push(piece);
    }
    return set;
  }

  const set1 = makeSets(str1);
  const set2 = makeSets(str2);
  const unionLength = set1.length + set2.length;
  let intersectionLength = 0;

  for (let i = 0; i < set1.length; i++) {
    const index = set2.indexOf(set1[i]);
    if (index !== -1) {
      intersectionLength++;
      set2.splice(index, 1);
    }
  }

  if (unionLength === 0) return 65536;
  return Math.floor(
    (intersectionLength / (unionLength - intersectionLength)) * 65536
  );
}
