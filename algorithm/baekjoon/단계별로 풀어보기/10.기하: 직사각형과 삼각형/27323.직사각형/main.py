import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
b = int(input())
print(a*b)
