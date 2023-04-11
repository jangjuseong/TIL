import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

arr = list(range(n+1))  # 배열을 초기화하는 다른 방법
for _ in range(m):  # for문 안의 변수 i, j와 헷갈리지 않도록 `i` 변수를 `_`로 변경
    i, j = map(int, input().split())
    arr[i:j+1] = arr[i:j+1][::-1]
print(*arr[1:])
