import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

bucket = [0 for i in range(n+1)]

for _ in range(m):
    i, j, k = map(int, input().split())
    for _ in range(i, j+1):
        bucket[_] = k

print(*bucket[1:])
