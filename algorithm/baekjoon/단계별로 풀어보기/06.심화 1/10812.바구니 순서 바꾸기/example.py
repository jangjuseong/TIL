import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
baskets = list(range(1, n+1))

for _ in range(m):
    i, j, k = map(int, input().split())
    i, j, k = i-1, j-1, k-1  # 0-based index로 변경
    temp = baskets[:i] + baskets[k:j+1] + baskets[i:k] + baskets[j+1:]
    baskets = temp

print(*baskets)
