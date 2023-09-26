function solution(s, skip, index) {
  var answer = '';

  // console.log('a'.charCodeAt()) 97
  // console.log('z'.charCodeAt()) 122
  const skipArr = [];
  for (let s of skip) {
    skipArr.push(s);
  }
  console.log(skipArr);
  for (let string of s) {
    let temp = '';
    let count = 0;
    let i = 1;
    while (true) {
      if (count === index) {
        answer += temp;
        break;
      }
      let tempCode = string.charCodeAt() + i;
      if (tempCode > 148) {
        tempCode -= 26;
      }
      if (tempCode > 122) {
        tempCode -= 26;
      }

      temp = String.fromCharCode(tempCode);
      if (skipArr.includes(temp)) {
        i++;
        continue;
      }
      count++;
      i++;
    }
  }

  return answer;
}
