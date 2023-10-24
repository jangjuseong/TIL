function solution(id_list, report, k) {
  const hash = {};
  for (let id of id_list) {
    hash[id] = [[], 0];
  }

  var answer = [];

  for (let value of report) {
    const [doReport, getReport] = value.split(' ');
    if (!hash[doReport][0].includes(getReport)) {
      hash[doReport][0].push(getReport);
      hash[getReport][1]++;
    }
  }

  for (let id of id_list) {
    let count = 0;
    for (let name of hash[id][0]) {
      if (hash[name][1] >= k) {
        count += 1;
      }
    }
    answer.push(count);
  }
  return answer;
}
