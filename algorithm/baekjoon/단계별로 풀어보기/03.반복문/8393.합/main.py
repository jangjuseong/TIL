import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())
total = 0

for i in range(1, a+1):
    total += i
print(total)
