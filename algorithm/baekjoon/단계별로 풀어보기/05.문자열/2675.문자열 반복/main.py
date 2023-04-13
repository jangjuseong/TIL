import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

t = int(input())
new_str = ''
for i in range(t):
    r, s = input().split()
    for i in s:
        new_str += i * int(r)
    print(new_str)
    new_str = ''
