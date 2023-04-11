import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, k = map(int, input().split())
result = 0

while True:
    target = (n//k)*k
    result += (n-target)
    n = target
    if n < k:
        break
    result += 1
    n //= k

result += (n-1)  # 이 부분 잘 이해 안감(23.4.11. 기준)
print(result)
