import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
array = list(map(int, input().split()))
v = int(input())

print(array.count(v))
