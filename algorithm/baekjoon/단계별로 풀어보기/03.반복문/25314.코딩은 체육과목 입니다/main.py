import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
b = int(a / 4)

text = ''

for i in range(b):
    text += 'long '

print(text + 'int')
