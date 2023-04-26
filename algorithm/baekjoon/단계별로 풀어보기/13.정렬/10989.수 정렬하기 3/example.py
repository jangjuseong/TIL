# import sys

# sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

# n = int(input())
# arr = []

# for i in range(n):
#     a = int(input())
#     arr.append(a)

# count = [0] * (max(arr)+1)

# for i, v in enumerate(arr):
#     count[v] += 1

# for i, v in enumerate(count):
#     for j in range(v):
#         print(i)

# 이것도 메모리 초과
import sys

n = int(sys.stdin.readline())
count = [0] * 10001

for i in range(n):
    a = int(sys.stdin.readline())
    count[a] += 1

for i, v in enumerate(count):
    for j in range(v):
        print(i)

# # 이렇게 해야 겨우 통과됨
