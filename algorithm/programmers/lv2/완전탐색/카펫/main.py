import math


def solution(brown, yellow):
    answer = []

    size = brown + yellow

    x = int(((2+brown//2) + math.sqrt((2+brown//2)**2 - 4*size)) / 2)
    y = size // x
    answer.append(x)
    answer.append(y)

    return answer
