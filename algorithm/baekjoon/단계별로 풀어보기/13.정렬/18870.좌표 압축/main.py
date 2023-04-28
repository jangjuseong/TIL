import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = list(map(int, input().split()))
array = list(set(arr))
array = sorted(array)


for i, v in enumerate(arr):
    arr[i] = array.index(v)


print(*arr)

# 시간 초과
