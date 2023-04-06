import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

X = int(input())
N = int(input())

total = 0

for i in range(N):
    a, b = map(int, input().split())
    total += a * b

if total == X:
    print('Yes')
else:
    print('No')
