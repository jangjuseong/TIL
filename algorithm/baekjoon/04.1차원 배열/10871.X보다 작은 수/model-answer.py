import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, x = map(int, input().split())
a = list(map(int, input().split()))

result = [num for num in a if num < x]
print(*result)
