import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n = int(input())

for i in range(1, n+1):
    digits_sum = i + sum(map(int, str(i)))
    if digits_sum == n:
        print(i)
        break
else:
    print(0)
