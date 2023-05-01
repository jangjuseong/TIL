import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())


d = [0] * 41

d[1] = 1
d[2] = 1

for i in range(3, n+1):
    d[i] = d[i-1] + d[i-2]

print(d[n], n-2)
