import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    age, name = input().split()
    arr.append((age, name))

arr = sorted(arr, key=lambda age: age[0])

for i, v in enumerate(arr):
    print(int(v[0]), v[1])

# 틀렸습니다라고 나옴.
