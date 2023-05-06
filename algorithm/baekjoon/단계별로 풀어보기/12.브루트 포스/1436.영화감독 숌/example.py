import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n = int(input())

count = 0
num = 666

while count < n:
    if '666' in str(num):
        count += 1
    num += 1

print(num-1)
