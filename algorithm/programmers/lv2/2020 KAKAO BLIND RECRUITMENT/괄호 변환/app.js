function separateBalancedBracket(string) {
  let left = [];
  let right = [];
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') left.push(string[i]);
    else right.push(string[i]);
    if (
      left.length !== 0 &&
      right.length !== 0 &&
      left.length === right.length
    ) {
      index = i + 1;
      break;
    }
  }
  return [string.slice(0, index), string.slice(index)];
}

function checkRightBracket(string) {
  let isRight = true;
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(string[i]);
    } else if (string[i] === ')' && stack.length !== 0) {
      stack.pop();
    } else {
      isRight = false;
      break;
    }
  }
  return isRight;
}

function makeRightBracket(u, v) {
  let converted = '(' + totalProcess(v) + ')';
  u = u
    .slice(1, u.length - 1)
    .split('')
    .map(v => {
      if (v === '(') return ')';
      else return '(';
    })
    .join('');

  return converted + u;
}

function totalProcess(string) {
  if (string === '') return '';
  let [u, v] = separateBalancedBracket(string);
  if (checkRightBracket(u)) {
    u += totalProcess(v);
  } else {
    u = makeRightBracket(u, v);
  }
  return u;
}

function solution(p) {
  return totalProcess(p);
}
