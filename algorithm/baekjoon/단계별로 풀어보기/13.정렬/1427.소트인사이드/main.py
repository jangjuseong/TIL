import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = input()
arr = []
for i in n:
    arr.append(i)
arr = sorted(arr, reverse=True)
print(int(''.join(arr)))
