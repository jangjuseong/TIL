import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m, k = map(int, input().split())
data = list(map(int, input().split()))
data.sort()
data.reverse()

result = 0
check = 0

for _ in range(m):
    check += 1
    if check != k:
        result += data[0]
    else:
        result += data[1]
        check = 0

print(result)
