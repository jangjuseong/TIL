import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

data = [0] * (500001)
n = int(input())
cards = list(map(int, input().split()))
for i in cards:
    data[i] += 1

m = int(input())
arr = list(map(int, input().split()))

for i, v in enumerate(arr):
    print(data[v], end=' ')
