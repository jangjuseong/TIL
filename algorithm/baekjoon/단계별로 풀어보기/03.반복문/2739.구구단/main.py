import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
for i in range(1, 10):
    print(f'{a} * {i} = {a*i}')
