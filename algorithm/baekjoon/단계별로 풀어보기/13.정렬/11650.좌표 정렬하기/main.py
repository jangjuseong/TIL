import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    x, y = map(int, input().split())
    arr.append((x, y))


arr = sorted(arr, key=lambda position_y: position_y[1])
arr = sorted(arr, key=lambda position_x: position_x[0])

for i, v in enumerate(arr):
    print(*v)
