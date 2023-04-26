import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)


arr = sorted(arr)
for i in arr:
    print(i)

#  ⬆︎ 이 코드는 시간초과 (2초짜리 문제)

n = int(input())
arr = []
for i in range(n):
    a = int(input())
    arr.append(a)


def quick_sort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]
    tail = array[1:]

    left_side = [x for x in tail if x <= pivot]
    right_side = [x for x in tail if x > pivot]

    return quick_sort(left_side) + [pivot] + quick_sort(right_side)


result = quick_sort(arr)
print(*map(int, result), sep='\n')
# map() 함수에서 이터레이터 반환 대신 언패킹하여 각 값이 개별적으로 출력되기 위하여 '*' 사용
# sep 은 각 항목 사이에 넣을 값, end는 print()가 끝난 후에 마지막에 붙을 값. 여기서는 print가 한 번 만 호출되므로 sep을 써줘야 한다.

# # 퀵 정렬로 해도 시간초과 발생. pypy3로 제출하니 해결되는 문제였음!
