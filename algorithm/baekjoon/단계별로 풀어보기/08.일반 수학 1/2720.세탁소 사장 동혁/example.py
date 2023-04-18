import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

money = [25, 10, 5, 1]

T = int(input())

for i in range(T):
    C = int(input())
    num = []
    for value in money:
        num.append(C//value)
        C = C % value
    print(*num)
