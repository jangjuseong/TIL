import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr = sorted(arr, reverse=True)
