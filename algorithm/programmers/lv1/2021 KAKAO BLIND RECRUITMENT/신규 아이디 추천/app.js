function solution(new_id) {
  var answer = '';

  let changeId = new_id;

  changeId = changeId.toLowerCase(); // lv1

  changeId = changeId
    .split('')
    .filter(letter => {
      if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
        return true;
      if (+letter >= 0 && +letter <= 9) return true;
      if (letter === '-' || letter === '_' || letter === '.') return true;
    })
    .join(''); // lv2

  let changeId2 = changeId.charAt(0);
  for (let i = 1; i < changeId.split('').length; i++) {
    if (changeId[i - 1] === '.' && changeId[i] === '.') {
      continue;
    }
    changeId2 += changeId[i];
  } // lv3

  changeId = changeId2;
  changeId = changeId.split('');
  if (changeId[0] === '.') changeId.shift();
  if (changeId[changeId.length - 1] === '.') changeId.pop();
  changeId = changeId.join('');

  if (changeId === '') changeId += 'a';
  if (changeId.length >= 16) changeId = changeId.slice(0, 15);
  if (changeId[changeId.length - 1] === '.')
    changeId = changeId.slice(0, changeId.length - 1);
  if (changeId.length <= 2) {
    let lastLetter = changeId[changeId.length - 1];
    while (changeId.length < 3) {
      changeId += lastLetter;
    }
  }
  answer = changeId;

  return answer;
}
