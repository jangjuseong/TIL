def solution(n):
    answer = 0

    arr = [0] * 100001
    arr[1] = 1
    arr[2] = 1
    for i in range(3, 100001):
        arr[i] = arr[i-1] + arr[i-2]

    answer = arr[n] % 1234567

    return answer
