import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = [0] * (31)

for i in range(28):
    num = int(input())
    arr[num] = 1

for i in range(1, 31):
    if arr[i] == 0:
        print(i)
