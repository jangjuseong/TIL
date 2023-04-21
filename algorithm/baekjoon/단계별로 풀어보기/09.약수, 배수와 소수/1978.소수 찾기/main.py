import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = list(map(int, input().split()))
result = [0] * (n)

for i, v in enumerate(arr):
    if v == 1:
        result[i] = -1
    for _ in range(2, v):
        if v % _ == 0:
            result[i] = -1

print(result.count(0))
