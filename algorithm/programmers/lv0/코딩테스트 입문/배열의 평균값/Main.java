import java.util.Arrays;

class Solution {
  public double solution(int[] numbers) {
    double answer = 0;

    int sum = Arrays.stream(numbers).sum();
    int length = numbers.length;

    answer = (double) sum / length;

    return answer;
  }
}