class Solution {
  public int solution(int n, int k) {
      int answer = 0;
      
      int service_bev = n / 10;
      k = k - service_bev;
      answer = n * 12000 + k * 2000;
          
      return answer;
  }
}