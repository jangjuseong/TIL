import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n = int(input())
print(n*(n-1))
