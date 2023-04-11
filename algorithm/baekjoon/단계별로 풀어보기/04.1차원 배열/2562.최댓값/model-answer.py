import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = [int(input()) for i in range(9)]

print(max(arr))
print(arr.index(max(arr)) + 1)
