import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, x = map(int, input().split())
a = list(map(int, input().split()))
arr = []

for i in range(len(a)):
    if a[i] < x:
        arr.append(a[i])

print(*arr)
