import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())
array = list(map(int, input().split()))
result = 0

for i, v in enumerate(array[:-1]):
    for j, k in enumerate(array[i+1:]):
        if v == k:
            pass
        else:
            result += 1

print(result)

# 이 코드는 정확한 결과를 보장하지 않습니다. 왜냐하면 같은 무게의 공이 여러 개 있을 수 있기 때문에, 중복된 조합이 세어지기 때문입니다. 예를 들어, 입력으로 주어진 예시에서 (1번, 2번)과 (2번, 1번)은 같은 조합이지만, 이 코드에서는 각각 다른 조합으로 세어집니다.
