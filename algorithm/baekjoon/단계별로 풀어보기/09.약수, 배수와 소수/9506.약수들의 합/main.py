import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    n = int(input())
    if n == -1:
        break
    divisors = [i for i in range(1, n) if n % i == 0]
    if sum(divisors) == n:
        text = ' + '.join(str(i) for i in divisors)
        print(f'{n} = {text}')
    else:
        print(f'{n} is NOT perfect.')
