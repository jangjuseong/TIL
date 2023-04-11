import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
data = list(map(int, input().split()))

m = max(data)

result = (sum(data)/len(data)) / m * 100
print(result)
