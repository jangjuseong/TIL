import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
array = [[0] * 100] * 100

# 이런식으로 초기화 하면 안된다고 한다.
# array의 각 행은 모두 같은 객체를 참조하므로, 한 행의 값을 변경하면 다른 모든 행의 값도 함께 변경된다. 따라서 이 방식으로 초기화하면 예상치 못한 결과가 발생할 수 있다.

for i in range(n):
    a, b = map(int, input().split())
    for i in range(a, a+10):
        for j in range(b, b+10):
            array[i][j] = 1

num = 0
for i in array:
    num += i.count(1)
print(num)

# 뇌가 망가진 것 같다. 왜 이렇게 안풀리는 걸까
# # example.py로 test 해보니 결국 입력 받는 곳에서 문제가 있었다. 나머지 코드는 내가 하던 대로 해도 된다.
