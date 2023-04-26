import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = [0] * (n+1)

for i in range(n):
    a = int(input())
    arr[a] += 1

print(arr)

for i, v in enumerate(arr):
    if v != 0:
        for j in range(v):
            print(i)
