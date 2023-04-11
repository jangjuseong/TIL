import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = []

for _ in range(9):
    arr.append(int(input()))

print(max(arr))
print(arr.index(max(arr)) + 1)
