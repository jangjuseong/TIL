import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

while True:
    try:
        a = input()
        print(a)
    except EOFError:
        break
