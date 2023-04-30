import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
result = 0
for i in range(n-1, 0, -1):
    result = result + i
print(result)
print(2)
