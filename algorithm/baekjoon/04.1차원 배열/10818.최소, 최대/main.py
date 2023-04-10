import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
arr = list(map(int, input().split()))

print(min(arr), max(arr))
