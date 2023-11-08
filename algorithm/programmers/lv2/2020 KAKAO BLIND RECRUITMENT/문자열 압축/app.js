function compressString(s, size) {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < s.length; i += size) {
    const current = s.substr(i, size);
    const next = s.substr(i + size, size);

    if (current === next) {
      count++;
    } else {
      compressed += (count > 1 ? count : '') + current;
      count = 1;
    }
  }
  return compressed.length;
}

function solution(s) {
  const maxLen = s.length;
  let shortest = maxLen;

  for (let size = 1; size <= s.length; size++) {
    const compressedLength = compressString(s, size);
    if (compressedLength < shortest) {
      shortest = compressedLength;
    }
  }

  return shortest;
}
