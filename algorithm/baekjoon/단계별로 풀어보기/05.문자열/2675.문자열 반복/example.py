import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

for _ in range(int(input())):
    r, s = input().split()
    print(''.join([i * int(r) for i in s]))


# join()은 문자열을 이어붙이는 메서드로, 리스트나 튜플과 같은 iterable 객체의 요소들을 구분자(seperator)로 구분하여 하나의 문자열로 연결한다.
