import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

x = int(input())

# 분수의 번호를 세는 변수
count = 0

# 대각선 방향으로 이동하면서 분수를 출력
for i in range(1, x + 1):
    for j in range(1, i + 1):
        count += 1
        # 짝수 대각선: 분자가 작아지고 분모가 커짐
        if i % 2 == 0:
            if j == i - (count - x):
                print(j, '/', i-j+1, sep='')
                exit()
        # 홀수 대각선: 분자가 커지고 분모가 작아짐
        else:
            if j == count - x + 1:
                print(j, '/', i-j+1, sep='')
                exit()
