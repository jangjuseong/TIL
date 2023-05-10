import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


def primary_number(A):
    divisor = []
    num = 2
    isTrue = True
    while isTrue:
        if A % num == 0:
            divisor.append(num)
            A = A / num
            if A == 1:
                isTrue = False
            num = 2
        else:
            num += 1

    return divisor


T = int(input())
for i in range(T):
    a, b = map(int, input().split())
    arr_a = primary_number(a)
    arr_b = primary_number(b)
    print(arr_a)
    print(arr_b)
