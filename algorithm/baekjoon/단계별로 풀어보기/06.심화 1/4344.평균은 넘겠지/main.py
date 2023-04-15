import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
for i in range(a):
    data = list(map(int, input().split()))
    num = data[0]
    data.pop(0)

    average = sum(data)/len(data)
    count = 0

    for i in data:
        if i > average:
            count += 1
    print('{:.3f}'.format(count/len(data)*100) + '%')
