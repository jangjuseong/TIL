import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = input()
b = a[::-1]
if a == b:
    print(1)
else:
    print(0)
