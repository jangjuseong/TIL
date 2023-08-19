function solution(want, number, discount) {
  let count = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let subArray = discount.slice(i, i + 10);
    let isAllAvailable = true;

    for (let j = 0; j < want.length; j++) {
      let requiredProductCount = number[j];
      let actualProductCount = subArray.filter(item => item === want[j]).length;
      if (actualProductCount < requiredProductCount) {
        isAllAvailable = false;
        break;
      }
    }

    if (isAllAvailable) {
      count++;
    }
  }

  return count;
}
