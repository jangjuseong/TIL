function getPermutation(n, k) {
  // 1. 팩토리얼 계산을 위한 배열 초기화
  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  // 2. 숫자 배열 초기화
  const nums = Array.from({ length: n }, (_, idx) => idx + 1);
  const result = [];

  // 3. k번째 순열 구하기
  while (n > 0) {
    // 3-1. 현재 남은 인원 중에서 어떤 숫자를 선택할지 계산
    const idx = Math.ceil(k / factorial[n - 1]) - 1;
    // 3-2. 선택한 숫자를 배열에서 제거하고 결과 배열에 추가
    const selectedNum = nums.splice(idx, 1)[0];
    result.push(selectedNum);
    // 3-3. 남은 순열의 개수를 고려하여 k 업데이트
    k %= factorial[n - 1];
    // 3-4. 남은 인원 수 업데이트
    n--;
  }

  // 4. k번째 순열 반환
  return result;
}

function solution(n, k) {
  // getPermutation 함수를 호출하여 k번째 순열을 구하고 반환
  const permutation = getPermutation(n, k);
  return permutation;
}
