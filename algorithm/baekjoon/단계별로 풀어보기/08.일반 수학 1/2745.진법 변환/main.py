import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, b = input().split()
b = int(b)

result = 0

print(ord('A') - 55)
for i in range(1, len(n)+1):
    if type(n[i-1]) == str:
        result += (ord(n[i-1])-55) * b ** (len(n) - i)

print(result)
