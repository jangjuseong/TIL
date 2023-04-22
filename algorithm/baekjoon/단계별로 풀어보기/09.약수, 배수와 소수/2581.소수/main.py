import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

m = int(input())
n = int(input())
arr = []

for i in range(m, n+1):
    primary = 1
    for j in range(2, i):
        if i % j == 0:
            primary = 0
    if primary == 1:
        arr.append(i)

if len(arr) == 0:
    print(-1)
else:
    print(sum(arr))
    print(min(arr))
