import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

result = ((n-2)*(n-1)*(2*n-3) + (n-1)*(n-2)*3) / 12
print(int(result))
print(3)

# 이중 for문으로 하면 시간 초과
# 등차 수열의 합 (k^2) 공식으로 구해야 함
