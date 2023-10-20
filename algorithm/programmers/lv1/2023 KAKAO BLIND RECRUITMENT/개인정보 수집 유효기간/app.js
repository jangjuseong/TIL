function solution(today, terms, privacies) {
  var answer = [];

  const [year, month, day] = today.split('.').map(Number);
  const endDate = new Date(year, month, day);

  const termMonth = {};
  for (let term of terms) {
    const [type, month] = term.split(' ');
    termMonth[type] = +month;
  }
  for (let i = 0; i < privacies.length; i++) {
    const [day, type] = privacies[i].split(' ');
    const [getYear, getMonth, getDay] = day.split('.').map(Number);
    const startDate = new Date(getYear, getMonth, getDay);

    let monthBetweenDates =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      endDate.getMonth() -
      startDate.getMonth();

    if (endDate.getDate() < startDate.getDate()) {
      monthBetweenDates--;
    }

    if (monthBetweenDates >= termMonth[type]) answer.push(i + 1);
  }

  return answer;
}
