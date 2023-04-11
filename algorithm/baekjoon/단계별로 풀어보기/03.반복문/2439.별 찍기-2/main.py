import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
space = ' '*a
star = ''
for i in range(1, a + 1):
    star += '*'
    space = space[:len(space)-i] + star
    print(space)
