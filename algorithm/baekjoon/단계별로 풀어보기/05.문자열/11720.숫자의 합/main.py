import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, a = int(input()), input()
a = list(a)
result = 0
for i in a:
    result += int(i)

print(result)
