import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

s = [None] * n
reverse_s = {}

for i in range(n):
    s[i] = input().strip()
    reverse_s[s[i]] = i

for i in range(m):
    quiz = input().strip()
    if quiz.isdigit():
        print(s[int(quiz)-1])
    else:
        print(s[reverse_s[quiz]])
