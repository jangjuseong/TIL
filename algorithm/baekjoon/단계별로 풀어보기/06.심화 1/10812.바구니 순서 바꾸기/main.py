import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
arr = list(range(n+1))
test = []
for _ in range(m):
    i, j, k = map(int, input().split())
    test = arr[i:j+1]
    for _ in range(j-i+1):
        arr[_] = k

# 시간 초과 (30분)
