import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


def gcd(A, B):
    while B != 0:
        A, B = B, A % B
    return A


a, b = map(int, input().split())

lcm = (a * b) // gcd(a, b)
print(lcm)
