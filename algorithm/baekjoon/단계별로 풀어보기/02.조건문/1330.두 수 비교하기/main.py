import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b = map(int, input().split())

if a > b:
    print('>')
elif a < b:
    print('<')
else:
    print('==')
