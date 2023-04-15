import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
count = 0
for i in range(a):
    data = input()
    arr = []
    arr.append(data[0])
    for j in range(len(data[1:])):
        if data[j] != data[j+1]:
            arr.append(data[j+1])
    for k in arr:
        if arr.count(k) != 1:
            continue
    count += 1
    print(arr)
    print(count)

# 막힘
