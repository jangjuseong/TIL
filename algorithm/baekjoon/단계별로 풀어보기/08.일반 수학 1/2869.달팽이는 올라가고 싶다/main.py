import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b, v = map(int, input().split())

q = (v-b) // (a-b)

r = (v-b) % (a-b)

if r != 0:
    print(q+1)
else:
    print(q)
