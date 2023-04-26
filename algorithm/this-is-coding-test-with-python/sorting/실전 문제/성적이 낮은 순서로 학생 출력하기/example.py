import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []

for i in range(n):
    a, b = input().split()
    arr.append((a, int(b)))

print(arr)
arr = sorted(arr, key=lambda student: student[1])
# lambda 함수는 간단한 함수를 한 줄로 작성할 수 있게 해주는 파이썬의 특별한 문법이다.'lambda 매개변수: 반환값'의 형태로 작성된다.

for student in arr:
    print(student[0], end=' ')
