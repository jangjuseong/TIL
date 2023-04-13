import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
data = list(map(int, input().split()))
data.sort()

result = 0

while True:
    if not data:
        break
    if data[-1] <= len(data):
        for i in range(data[-1]):
            data.pop()
        result += 1
    else:
        break

print(result)

# 좋지 못한 코드
# 구체적으로 어떤 부분에서 문제가 있는지 확인하기가 어렵다
