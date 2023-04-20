import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, k = map(int, input().split())
divisors = [i for i in range(1, n+1) if n % i == 0]

if k >= len(divisors):
    print(0)
else:
    print(divisors[k-1])
