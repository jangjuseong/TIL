import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
array = list(map(int, input().split()))
v = int(input())

num = []
for i in range(len(array)):
    if array[i] == v:
        num.append(v)

print(len(num))
