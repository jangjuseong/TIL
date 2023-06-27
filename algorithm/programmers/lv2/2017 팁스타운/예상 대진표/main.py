import math


def solution(n, a, b):
    answer = 0
    t = int(math.log2(n))

    answer = t
    min_num = min(a, b)
    max_num = max(a, b)
    while n != 1:
        if n == 2:
            answer = 1
            return
        n /= 2
        if min_num <= n and max_num > n:
            return answer
        elif max_num <= n:
            answer -= 1

    return answer
