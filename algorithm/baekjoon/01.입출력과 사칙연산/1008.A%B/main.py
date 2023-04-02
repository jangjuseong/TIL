import sys
sys.stdin = open('../input.txt', 'r', encoding='utf-8')

a, b = map(int, input().split())
print(a/b)
