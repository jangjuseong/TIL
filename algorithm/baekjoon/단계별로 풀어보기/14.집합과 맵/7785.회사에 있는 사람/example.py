import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
log = {}

# 출입 기록을 딕셔너리에 저장
for i in range(n):
    name, status = input().split()
    if name not in log:
        log[name] = []
    log[name].append((i, status))

# 현재 회사에 있는 사람들을 찾아서 리스트에 저장
current_employees = []
for name, status_list in log.items():
    enter_count = 0
    for i, status in status_list:
        if status == "enter":
            enter_count += 1
    if enter_count > 0:
        current_employees.append(name)


# 사전 순으로 정렬한 후, 역순으로 출력
current_employees.sort()
current_employees.reverse()
for name in current_employees:
    print(name)
