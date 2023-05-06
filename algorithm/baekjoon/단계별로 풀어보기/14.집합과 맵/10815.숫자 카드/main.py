import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
card_lists = list(map(int, input().split()))
m = int(input())
check_cards = list(map(int, input().split()))

minus = [0] * 10000001
plus = [0] * 10000001

for i in card_lists:
    if i >= 0:
        plus[i] = 1
    else:
        minus[i] = 1

result = []

for i in check_cards:
    if i >= 0:
        result.append(plus[i])
    else:
        result.append(minus[i])

print(*result)
