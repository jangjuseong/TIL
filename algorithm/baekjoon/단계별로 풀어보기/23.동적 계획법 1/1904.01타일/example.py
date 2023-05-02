import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

# Base cases
dp = [0] * (n+1)
dp[1] = 1
dp[2] = 2

# Calculate dp[i] for i=3 to N
for i in range(3, n+1):
    dp[i] = (dp[i-1] + dp[i-2]) % 15746

print(dp[n])

# 제대로 이해는 못하겠다.
