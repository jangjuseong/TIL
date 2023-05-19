from itertools import permutations


def isPrime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def solution(numbers):

    answer = 0
    arr = list(numbers)
    array = []

    for j in range(1, len(arr)+1):
        for i in permutations(arr, j):
            array.append(''.join(i))

    array = list(set(array))

    for i, v in enumerate(array):
        array[i] = v.lstrip('0')

    array = list(filter(None, array))
    array = list(set(array))
    if '1' in array:
        array.remove('1')

    for i, v in enumerate(array):

        if isPrime(int(v)) is True:
            answer += 1
    return answer
