import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = list(map(int, input().split()))

arr.sort()
if arr[2] >= arr[1] + arr[0]:
    arr[2] = arr[1] + arr[0] - 1
result = arr[0] + arr[1] + arr[2]
print(result)
