import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

T = int(input())
for i in range(T):
    a, b = map(int, input().split())
    middle_result = a * b
    minimum = min(a, b)
    for i in range(1, minimum):
        if middle_result % i == 0:
            middle_result = middle_result / i
    print(int(middle_result))
