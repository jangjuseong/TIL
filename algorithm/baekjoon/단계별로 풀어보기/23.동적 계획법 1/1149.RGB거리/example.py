import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

cost = []
for i in range(n):
    cost.append(list(map(int, input().split())))

min_cost = [[0]*3 for i in range(n)]

for j in range(3):
    min_cost[0][j] = cost[0][j]

print(min_cost)

for i in range(1, n):
    for j in range(3):
        min_cost[i][j] = cost[i][j] + \
            min(min_cost[i-1][(j+1) % 3], min_cost[i-1][(j+2) % 3])

print(min(min_cost[n-1]))

# 마음이 조급하니 머리에 안들어온다
