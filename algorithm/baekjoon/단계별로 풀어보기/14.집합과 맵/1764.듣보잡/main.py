import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

didnt_listen = {}
for i in range(n):
    didnt_listen[input()] = 0

didnt_listen_and_see = []

for j in range(m):
    a = input()
    if a in didnt_listen:
        didnt_listen_and_see.append(a)

didnt_listen_and_see.sort()

print(len(didnt_listen_and_see))
for i in didnt_listen_and_see:
    print(i)
