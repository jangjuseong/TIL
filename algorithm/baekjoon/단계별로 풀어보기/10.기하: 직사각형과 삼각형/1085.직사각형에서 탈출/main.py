import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

x, y, w, h = map(int, input().split())

min_value = min(abs(w-x), x, abs(h-y), y)
print(min_value)
