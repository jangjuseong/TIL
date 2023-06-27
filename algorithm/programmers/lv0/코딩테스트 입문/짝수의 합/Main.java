class Solution {
  public int solution(int n) {
    int answer = 0;

    n /= 2;

    for (int i = 1; i <= n; i++) {
      answer += i;
    }

    answer *= 2;

    return answer;
  }
}