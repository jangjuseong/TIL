import sys
sys.stdin = open('../python.txt', 'r', encoding='utf-8')

a = int(input())
b = int(input())

########## python에서 input 값 여러 줄로 받을 때 ##########
# 이 에러는 input().split('\n')이 두 개의 값을 반환하지 않았기 때문에 발생합니다.
# 이 경우에는 input().split('\n')이 하나의 값을 반환했기 때문에 ValueError가 발생했습니다.

# 파일에서 여러 줄을 입력받을 때는 input() 함수를 두 번 호출하여 두 개의 변수에 값을 저장하는 것이 좋습니다.

digits = []
new_digits = []

while b > 0:
    digit = b % 10
    digits.append(digit * a)
    b = b // 10

for i, digit in enumerate(digits):
    print(digit)

for i, digit in enumerate(digits):
    new_digit = digit * (10 ** i)
    new_digits.append(new_digit)

last = sum(new_digits)

print(last)


# 더 간결한 코드

# a, b = int(input()), input()
# for p in b[::-1]:
#     print(a*int(p))

# print(a*int(b))
