import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
cards = set(map(int, input().split()))

m = int(input())
to_check = list(map(int, input().split()))

for num in to_check:
    if num in cards:
        print(1)
    else:
        print(0)
