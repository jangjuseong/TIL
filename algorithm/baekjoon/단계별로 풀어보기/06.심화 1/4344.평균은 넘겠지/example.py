import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
for _ in range(n):
    data = list(map(int, input().split()))[1:]
    avg = sum(data) / len(data)
    count = sum(1 for i in data if i > avg)
    print(f'{count / len(data) * 100:.3f}%')
