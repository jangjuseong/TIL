import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    a, b, c = map(int, input().split())

    if a == b == c == 0:
        break

    array = []
    array.append(a)
    array.append(b)
    array.append(c)

    array.sort()

    if array[2] >= (array[1] + array[0]):
        print('Invalid')
    elif array[0] == array[1] == array[2]:
        print('Equilateral')
    elif array[0] == array[1] or array[1] == array[2] or array[0] == array[1]:
        print('Isosceles')
    else:
        print('Scalene')
