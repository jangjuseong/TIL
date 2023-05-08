import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n, m = map(int, input().split())

unheard_of = set()
not_reported = set()

for i in range(n):
    unheard_name = input().strip()
    unheard_of.add(unheard_name)

for i in range(m):
    reported_name = input().strip()
    not_reported.add(reported_name)

unheard_and_not_reported = unheard_of - not_reported
not_reported_and_unheard = not_reported - unheard_of

print(len(unheard_and_not_reported))
print('\n'.join(sorted(unheard_and_not_reported)))
print(len(not_reported_and_unheard))
print('\n'.join(sorted(not_reported_and_unheard)))
