import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

money = [25, 10, 5, 1]

T = int(input())
data = [[0]*4 for i in range(T)]

for i in range(T):
    C = int(input())
    for index, value in enumerate(money):
        data[i][index] = C // value
        C = C % value
    print(*data[i])
