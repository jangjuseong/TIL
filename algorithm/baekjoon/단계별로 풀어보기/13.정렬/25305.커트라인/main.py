import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, k = map(int, input().split())
arr = list(map(int, input().split()))
arr = sorted(arr, reverse=True)
print(arr[k-1])
