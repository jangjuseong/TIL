import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

arr = [i for i in range(0, n+1)]
for i in range(m):
    i, j = map(int, input().split())
    arr[i:j+1] = arr[i:j+1][::-1]
print(*arr[1:])
