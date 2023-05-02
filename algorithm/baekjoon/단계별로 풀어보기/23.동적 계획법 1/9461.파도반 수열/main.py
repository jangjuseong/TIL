import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

T = int(input())
d = [0] * 101
d[1] = 1
d[2] = 1
d[3] = 1
d[4] = 2
d[5] = 2
d[6] = 3
for i in range(7, 101):
    d[i] = d[i-1] + d[i-5]

for i in range(T):
    n = int(input())
    print(d[n])
