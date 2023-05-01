import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    a, b, c = map(int, input().split())
    if a == b == c == -1:
        break

# 감이 안온다.
