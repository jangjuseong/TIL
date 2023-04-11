import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = -1
b = 10
while a != 0 and b != 0:
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    print(a+b)
