import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b = input().split()
a = int(a[::-1])
b = int(b[::-1])
if a > b:
    print(a)
else:
    print(b)
