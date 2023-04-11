import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

h, m = map(int, input().split())
time = int(input())

time_h = time // 60
time_m = time % 60

h += time_h
m += time_m

if m >= 60:
    m -= 60
    h += 1

if h >= 24:
    h -= 24

print(h, m)
