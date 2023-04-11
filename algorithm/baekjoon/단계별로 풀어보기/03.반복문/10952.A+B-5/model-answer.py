import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    A, B = map(int, input().split())
    if A == 0 and B == 0:
        break
    print(A + B)
