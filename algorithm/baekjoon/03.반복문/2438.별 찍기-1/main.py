import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
star = ''

for i in range(1, a+1):
    star += '*'
    print(star)
