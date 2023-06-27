from math import gcd


def solution(arr):
    def lcm(a, b):
        return int(a * b / gcd(a, b))

    answer = lcm(arr[0], arr[1])

    for i in range(2, len(arr)):
        answer = lcm(answer, arr[i])

    return answer
