import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, a = int(input()), input()
print(sum(map(int, a)))
