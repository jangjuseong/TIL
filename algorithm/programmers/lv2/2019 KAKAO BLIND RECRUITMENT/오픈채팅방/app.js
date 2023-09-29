function solution(record) {
  var answer = [];
  const hash = {};

  for (let r of record) {
    const [state, uid, nickname] = r.split(' ');
    if (nickname) hash[uid] = nickname;
  }

  for (let r of record) {
    const [state, uid, nickname] = r.split(' ');
    if (state === 'Change') continue;
    answer.push(
      `${hash[uid]}님이 ${state === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    );
  }

  return answer;
}
