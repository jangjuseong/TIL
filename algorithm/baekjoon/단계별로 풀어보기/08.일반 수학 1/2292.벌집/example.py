import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())


def last(a):
    return a * (a+1) / 2  # 재귀함수 말고 등차수열로 변경


def formula(t):
    return 6 * last(t) + 1


result = 0

value = 1
while True:
    if n == 1:
        result = 1
        break

    formula_lower_bound = formula(value - 1) + 1
    formula_upper_bound = formula(value)
    if formula_lower_bound <= n <= formula_upper_bound:
        result = value + 1
        break
    else:
        value += 1

print(result)
