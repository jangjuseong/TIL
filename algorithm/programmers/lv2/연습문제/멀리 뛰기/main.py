def solution(n):
    answer = 0
    array = [0] * 2001
    array[1] = 1
    array[2] = 2

    for i in range(3, 2000):
        array[i] = array[i-1] + array[i-2]

    answer = array[n] % 1234567

    return answer
