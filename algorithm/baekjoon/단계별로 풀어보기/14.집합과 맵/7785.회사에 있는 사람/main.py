import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
s = set()
for i in range(n):
    name, state = input().split()
    if state == 'enter':
        s.add(name)
    elif state == 'leave':
        s.discard(name)

employee_list = list(s)
employee_list.sort(reverse=True)
for i, v in enumerate(employee_list):
    print(v)

# 시간 초과
