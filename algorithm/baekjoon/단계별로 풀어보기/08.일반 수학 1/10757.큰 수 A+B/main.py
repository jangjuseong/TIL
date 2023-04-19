import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b = map(int, input().split())
print(a+b)
