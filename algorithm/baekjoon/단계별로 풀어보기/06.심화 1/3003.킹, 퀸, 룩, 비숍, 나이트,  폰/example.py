import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

arr = [1, 1, 2, 2, 2, 8]
exist = list(map(int, input().split()))
new_arr = [a - e for a, e in zip(arr, exist)]
# zip() 함수는 두 개 이상의 반복 가능한(iterable) 객체를 인자로 받아, 각 객체의 동일한 인덱스의 요소들을 묶어 하나의 튜플로 만들어 주는 역할을 합니다.
print(*new_arr)
