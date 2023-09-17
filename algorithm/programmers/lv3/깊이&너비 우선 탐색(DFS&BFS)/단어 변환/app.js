function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  let visited = new Set();
  let queue = [[begin, 0]];

  while (queue.length > 0) {
    const [currentWord, steps] = queue.shift();

    if (currentWord === target) {
      return steps;
    }

    if (!visited.has(currentWord)) {
      visited.add(currentWord);

      for (const nextWord of words) {
        if (isOneLetterDifferent(currentWord, nextWord)) {
          queue.push([nextWord, steps + 1]);
        }
      }
    }
  }
  return 0;
}

function isOneLetterDifferent(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) {
        return false;
      }
    }
  }
  return diffCount === 1;
}
