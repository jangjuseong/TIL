import sys
sys.stdin = open('../python.txt', 'r', encoding='utf-8')

a, b, c = map(int, input().split())
print(a+b+c)
