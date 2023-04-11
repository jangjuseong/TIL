import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b = int(input()), int(input())

if a > 0 and b > 0:
    print(1)
elif a < 0 and b > 0:
    print(2)
elif a < 0 and b < 0:
    print(3)
else:
    print(4)
