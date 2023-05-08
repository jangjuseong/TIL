import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
cards = list(map(int, input().split()))
freq = {}

for i in cards:
    if i in freq:
        freq[i] += 1
    else:
        freq[i] = 1

m = int(input())
arr = list(map(int, input().split()))

for i in arr:
    if i in freq:
        print(freq[i], end=' ')
    else:
        print(0, end=' ')
