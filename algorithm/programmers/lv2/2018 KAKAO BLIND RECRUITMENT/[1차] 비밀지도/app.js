function decode(n, arr) {
  function toBinary(num) {
    let binary = num.toString(2);
    while (binary.length < n) {
      binary = '0' + binary;
    }
    return binary;
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    let binary1 = toBinary(arr[0][i]);
    let binary2 = toBinary(arr[1][i]);

    let decodedLine = '';
    for (let j = 0; j < n; j++) {
      if (binary1[j] === '1' || binary2[j] === '1') {
        decodedLine += '#';
      } else {
        decodedLine += ' ';
      }
    }
    result.push(decodedLine);
  }

  return result;
}
