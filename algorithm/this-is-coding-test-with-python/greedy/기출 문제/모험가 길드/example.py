import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
data = list(map(int, input().split()))
data.sort()

result = 0

count = 0

for i in data:
    count += 1
    if count >= i:
        result += 1
        count = 0

print(result)
