import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    try:
        a, b = map(int, input().split())
        print(a + b)
    except:
        break
