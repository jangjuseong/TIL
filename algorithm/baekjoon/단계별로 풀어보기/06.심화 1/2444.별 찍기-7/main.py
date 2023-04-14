import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a = int(input())

for i in range(1, a + 1):
    print(' ' * (a-i), '*'*(2 * i - 1))
for i in range(a - 1, 0, -1):
    print(' ' * (a-i), '*'*(2 * i - 1))

# 제출 결과: '출력 형식이 잘못되었습니다' 라는 에러 뜸
# 이 경우에 print 함수 내부를 콤마(',')로 구분해서 공백이 하나 더 들어갔기 때문이다. 따라서 + 로 두 출력값을 이어줘야 한다.
