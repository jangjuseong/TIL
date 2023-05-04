import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

arr = list(range(n-1))
result = 0
for i in range(n-1, 0, -1):
    result += sum(arr[:i])

print(result)
print(3)

# 시간초과 남
