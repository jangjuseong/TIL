import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)

arr = sorted(arr)
for i in arr:
    print(i)
