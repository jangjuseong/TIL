import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []

for i in range(n):
    a, b = input().split()
    arr.append((a, int(b)))

print(arr)
arr = sorted(arr)  # 튜플에서 막힘
