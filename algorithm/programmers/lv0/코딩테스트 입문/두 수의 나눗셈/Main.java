class Solution {
    public int solution(int num1, int num2) {
        int answer = 0;
        
        double divisionResult = (double) num1 / num2;
        double multipleResult = divisionResult * 1000;
        int result = (int) multipleResult;
        answer = result;
        
        
        return answer;
    }
}