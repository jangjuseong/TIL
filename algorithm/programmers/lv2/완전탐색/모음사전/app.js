function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;

  function dfs(str) {
    if (str.length > 5) return;
    if (str === word) return count;
    count++;

    for (const vowel of vowels) {
      const found = dfs(str + vowel);
      if (found !== undefined) return found;
    }
  }

  return dfs('');
}
