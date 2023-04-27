import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    age, name = input().split()
    arr.append((int(age), i, name))

arr = sorted(arr, key=lambda x: (x[0], x[1]))

for age, _, name in arr:
    print(age, name)

# 입력순서에 대한 조건 추가!
# 정렬 후에는 i를 사용하지 않기 때문에, 더미 변수 _를 사용하여 무시.
