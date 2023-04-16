import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

# 입력 받기
n = int(input())
paper = [[0] * 100 for _ in range(100)]  # 흰색 도화지 초기화

# 색종이 붙이기
for i in range(n):
    x, y = map(int, input().split())
    for j in range(x, x+10):
        for k in range(y, y+10):
            paper[j][k] = 1

# 검은 영역의 넓이 구하기
area = 0
for i in range(100):
    for j in range(100):
        if paper[i][j] == 1:
            area += 1

print(area)
