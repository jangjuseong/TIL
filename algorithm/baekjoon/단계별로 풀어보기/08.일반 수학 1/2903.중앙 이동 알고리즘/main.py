import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())


def computer(value):
    center = 2 ** (2 * (value-1))
    side = 2 * (2 ** (value-1)) * (2 ** (value-1) + 1)
    if value == 1:
        return 4 + center + side
    return computer(value-1) + center + side


print(computer(n))
