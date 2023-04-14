import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())

for i in range(1, a + 1):
    print(' ' * (a-i) + '*'*(2 * i - 1))
for i in range(a - 1, 0, -1):
    print(' ' * (a-i) + '*'*(2 * i - 1))
