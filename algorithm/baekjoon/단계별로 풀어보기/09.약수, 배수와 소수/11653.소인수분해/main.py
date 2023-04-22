import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

isContinue = True
while isContinue:
    if n == 1:
        isContinue = False
    isPrime = False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            print(i)
            n = n / i
            isPrime = True
        else:
            continue
        break
    if isPrime is False:
        print(int(n))
        isContinue = False
