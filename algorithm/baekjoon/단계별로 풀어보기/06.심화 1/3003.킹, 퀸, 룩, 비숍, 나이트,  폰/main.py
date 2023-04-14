import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = [1, 1, 2, 2, 2, 8]
exist = list(map(int, input().split()))
new_arr = []

for i in range(len(arr)):
    new_arr.append(arr[i] - exist[i])

print(*new_arr)
