import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = input()
print(ord(a))

# 'ord' 내장함수는 주어진 문자의 아스키 코드 값을 반환. ordinal에서 유래
# 'chr' 내장함수는 주어진 아스키 코드 값을 문자로 변환. character에서 유래
