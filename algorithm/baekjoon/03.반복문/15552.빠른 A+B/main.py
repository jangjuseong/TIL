import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(sys.stdin.readline())

for i in range(a):
    b, c = map(int, sys.stdin.readline().split())
    print(b+c)

# 런타임 에러 남
# 런타임 에러가 났던 이유: 백준 사이트에서 import sys를 같이 첨부를 안해줬기 때문.
