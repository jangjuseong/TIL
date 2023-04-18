import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


def decimal_to_base(decimal, base):
    digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    q, r = divmod(decimal, base)
    if q == 0:
        return digits[r]
    return decimal_to_base(q, base) + digits[r]


n, b = map(int, input().split())
print(decimal_to_base(n, b))
