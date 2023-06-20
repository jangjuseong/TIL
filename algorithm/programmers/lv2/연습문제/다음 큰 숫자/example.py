def solution(n):
    # n을 이진수로 변환하여 1의 갯수를 센다
    count = bin(n).count('1')

    # n보다 큰 수들 중에서 1의 갯수가 같은 수를 찾는다
    while True:
        n += 1
        if bin(n).count('1') == count:
            return n
