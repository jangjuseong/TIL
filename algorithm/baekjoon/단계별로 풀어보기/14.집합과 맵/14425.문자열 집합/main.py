import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
arr = []
for i in range(n):
    arr.append(input())


count = 0
for i in range(m):
    if input() in arr:
        count += 1
    else:
        continue

print(count)
