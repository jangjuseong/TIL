import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

bucket = [0] * (n+1)

for _ in range(m):
    i, j, k = map(int, input().split())
    bucket[i:j+1] = [k] * (j-i+1)

print(*bucket[1:])
