import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

text = input().split()
print(len(text))
