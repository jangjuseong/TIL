import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n, m = map(int, input().split())
cards = sorted(list(map(int, input().split())))

closest_sum = float('inf')

for i in range(n):
    for j in range(i + 1, n):
        for k in range(j + 1, n):
            total = cards[i] + cards[j] + cards[k]
            if total <= m and abs(m - total) < abs(m - closest_sum):
                closest_sum = total

print(closest_sum)
