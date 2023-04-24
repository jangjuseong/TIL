import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr_x = []
arr_y = []
for i in range(n):
    x, y = map(int, input().split())
    arr_x.append(x)
    arr_y.append(y)

if n == 1:
    print(0)
else:
    print((max(arr_x) - min(arr_x)) * (max(arr_y) - min(arr_y)))
