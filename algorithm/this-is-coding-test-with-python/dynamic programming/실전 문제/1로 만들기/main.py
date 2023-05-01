import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

d = [0] * 30000
x = int(input())
count = 0


def makeTo1(num, counts):
    if num == 1:
        return
    if d[num] == 0:
        d[num] = num
    if d[num] % 5 == 0:
        num = num / 5
        d[num] = num
    elif d[num] % 3 == 0:
        num = num/3
        d[num] = num
    elif d[num] % 2 == 0:
        num = num/2
        d[num] = num
    else:
        num -= 1
        d[num] = num
    counts += 1

    makeTo1(num, counts)


makeTo1(x, count)
print(count)

# 15분 초과
