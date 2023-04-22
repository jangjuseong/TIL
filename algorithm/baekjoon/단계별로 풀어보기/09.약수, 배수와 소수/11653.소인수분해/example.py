import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

if n == 1:
    exit()

i = 2
while n != 1:
    if n % i == 0:
        print(i)
        n = n // i
    else:
        i += 1
