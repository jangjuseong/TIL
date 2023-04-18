import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

N, B = input().split()  # N은 B진법으로 표현된 수, B는 진법
B = int(B)
num = 0
for i, digit in enumerate(N[::-1]):  # N의 가장 오른쪽 자리부터 0번째 자리까지 반복
    if digit.isdigit():  # 숫자인 경우
        num += int(digit) * (B ** i)  # B의 i승을 곱해서 더함
    else:  # 알파벳인 경우
        num += (ord(digit) - ord('A') + 10) * \
            (B ** i)  # 알파벳에 해당하는 숫자를 B의 i승을 곱해서 더함
print(num)

N, B = input().split()
B = int(B)
num = 0
for i, digit in enumerate(N[::-1]):
    if digit.isdigit():
        num += int(digit) * (B ** i)
    else:
        num += (ord(digit) - ord('A') + 10) * (B ** i)
print(num)
