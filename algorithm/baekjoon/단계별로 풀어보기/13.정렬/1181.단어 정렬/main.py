import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    word = input()
    arr.append((word, len(word)))

arr = list(set(arr))

arr = sorted(arr)
arr = sorted(arr, key=lambda length: length[1])

for i, v in enumerate(arr):
    print(v[0])
