import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = []
for i in range(5):
    a = int(input())
    arr.append(a)

arr = sorted(arr)
average = sum(arr) / len(arr)
mid = arr[2]
print(int(average))
print(mid)
