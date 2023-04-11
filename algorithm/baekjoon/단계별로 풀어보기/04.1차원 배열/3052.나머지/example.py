import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

print(len(set(int(input()) % 42 for _ in range(10))))

# set을 사용하면 중복된 값을 자동으로 제거해주기 때문에 코드를 더 간결하게 표현할 수 있다.
