import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = input()
count_0 = 0
count_1 = 0

for i in a:
    if i == '0':
        count_0 += 1
    else:
        count_1 += 1

minimum = min(count_0, count_1)

# 풀이 방법 안떠올라서 못품
