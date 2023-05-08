import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

len_a, len_b = map(int, input().split())
A = set(map(int, input().split()))
B = set(map(int, input().split()))

first = A - B
second = B - A
print(len(first) + len(second))
