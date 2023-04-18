import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, b = input().split()
b = int(b)
result = ''

for i in n[::-1]:
    result += chr(i)
    print(result)

# # 감이 안온다
