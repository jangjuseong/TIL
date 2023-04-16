import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
a = []
b = []
for i in range(n):
    arr = list(map(int, input().split()))
    a.append(arr)
for i in range(n):
    arr = list(map(int, input().split()))
    b.append(arr)

array1 = [0] * m
array = [array1] * n

for i in range(n):
    for j in range(m):
        array[i][j] = a[i][j] + b[i][j]
    print(*array[i])
