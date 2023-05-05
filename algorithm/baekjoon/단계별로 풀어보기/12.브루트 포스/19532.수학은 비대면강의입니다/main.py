import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b, c, d, e, f = map(int, input().split())
x = int((c*e-b*f)/(a*e-b*d))
y = int((a*f-c*d)/(a*e-b*d))

print(x, y)
