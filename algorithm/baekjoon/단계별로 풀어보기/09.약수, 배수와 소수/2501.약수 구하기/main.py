import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, k = map(int, input().split())
arr = [0]
for i in range(1, n+1):
    if n % i == 0:
        arr.append(i)

if len(arr) - 1 < k:
    print(0)
else:
    print(arr[k])
