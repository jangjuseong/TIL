import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
arr = list(map(int, input().split()))
unique_elems = sorted(set(arr))
index_dict = {elem: i for i, elem in enumerate(unique_elems)}

for i, v in enumerate(arr):
    arr[i] = index_dict[v]

print(*arr)

# 이 코드는 딕셔너리를 이용하여 각각의 인덱스를 저장하기 때문에 더 효율적이다.
