import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

t = int(input())
for i in range(t):
    data = input()
    print(data[0], data[-1], sep='')
