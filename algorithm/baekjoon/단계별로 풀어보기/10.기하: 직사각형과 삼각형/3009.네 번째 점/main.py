import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

x = []
y = []
for i in range(3):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)

value = []
for i, v in enumerate(x):
    if x.count(v) == 1:
        value.append(v)
for i, v in enumerate(y):
    if y.count(v) == 1:
        value.append(v)

print(*value)
