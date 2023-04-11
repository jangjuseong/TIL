import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = []
for i in range(10):
    value = int(input())
    remainder = value % 42
    if not remainder in arr:
        arr.append(remainder)

print(len(arr))
