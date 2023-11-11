function solution(food) {
  let tray = '';
  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);
    tray += i.toString().repeat(count);
  }
  let reversedTray = tray.split('').reverse().join('');

  return tray + '0' + reversedTray;
}
