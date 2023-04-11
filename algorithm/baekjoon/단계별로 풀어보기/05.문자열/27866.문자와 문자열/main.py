import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

s = input()
print(s[int(input())-1])
