import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

s = {}
reverse_s = {}
for i in range(1, n+1):
    name = input().strip()
    s[i] = name
    reverse_s[name] = i


for i in range(m):
    quiz = input()
    if quiz.isdigit():
        print(s[int(quiz)])
    else:
        print(reverse_s[quiz])

# 시간 초과
# pypy3로 하니까 문제 해결
