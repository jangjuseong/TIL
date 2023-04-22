import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


m = int(input())
n = int(input())
prime_sum = 0
min_prime = None

for i in range(m, n+1):
    if i < 2:  # 1은 소수가 아님
        continue
    is_prime = True
    for j in range(2, int(i**0.5)+1):
        if i % j == 0:
            is_prime = False
            break
    if is_prime:
        prime_sum += i
        if min_prime is None or i < min_prime:
            min_prime = i

if min_prime is None:
    print(-1)
else:
    print(prime_sum)
    print(min_prime)

# i가 소수가 아닐 경우, i는 a*b (a<=b) 의 형태로 나타낼 수 있습니다. 이 때 a와 b 중 하나는 반드시 i의 제곱근 이하이기 때문에, i의 제곱근 이하의 모든 수로 나누어 떨어지는지를 검사하면 i가 소수인지 아닌지를 판별할 수 있습니다.

# 만약 i의 제곱근 이하의 모든 수로 나누어 떨어지지 않는다면, 그 이상의 수로 나누어 떨어질 가능성도 없기 때문에 i는 소수입니다.

# 따라서, i를 소수인지 판별하기 위해서는 2부터 i의 제곱근까지의 모든 수로 나누어 떨어지는지를 검사하면 됩니다. 이렇게 범위를 두면 불필요한 검사를 줄일 수 있기 때문에, 효율적인 알고리즘을 작성할 수 있습니다.
