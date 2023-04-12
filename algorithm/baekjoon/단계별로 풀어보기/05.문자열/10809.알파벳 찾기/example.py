import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = input()
result = [a.find(chr(i)) for i in range(97, 123)]
print(*result)
