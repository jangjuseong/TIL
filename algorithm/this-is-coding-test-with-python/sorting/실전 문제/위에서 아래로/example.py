import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

array = []
for i in range(n):
    array.append(int(input()))

array = sorted(array, reverse=True)

for i in array:
    print(i, end=' ')
