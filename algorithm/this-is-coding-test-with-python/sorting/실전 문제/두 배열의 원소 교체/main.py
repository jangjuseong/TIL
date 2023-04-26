import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, k = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

print(a)
for i in range(k):
    min_a = min(a)
    max_b = max(b)
    print(min_a, max_b)
    if min_a < max_b:
        a[a.index(min(a))], b[b.index(max(b))
                              ] = b[b.index(max(b))], a[a.index(min(a))]
    else:
        break


print(sum(a))
