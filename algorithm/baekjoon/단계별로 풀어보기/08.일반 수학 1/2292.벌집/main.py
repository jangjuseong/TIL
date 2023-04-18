import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())


def last(a):
    if a == 0:
        return 0
    return last(a-1) + a


def formula(t):
    return 6 * last(t) + 1


result = 0

value = 1
while True:
    if n == 1:
        result = 1
        break

    if (formula(value-1) + 1) <= n <= formula(value):
        result = value + 1
        break
    else:
        value += 1

print(result)

# 런타임 에러 발생
