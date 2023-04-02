import sys
sys.stdin = open('../python.txt', 'r', encoding='utf-8')

a, b = map(int, input().split())
print(a+b)
print(a-b)
print(a*b)
print(a//b)
print(a % b)
