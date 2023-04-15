import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = list(input().upper())
b = set(a)
arr = []

c = {}

for i in b:
    arr.append(a.count(i))
arr.sort()

for i in b:
    c[i] = a.count(i)

result = 0

for i in c:
    if c[i] > result:
        result = c[i]
    print(c[i])

# 머리가 안돌아간다
