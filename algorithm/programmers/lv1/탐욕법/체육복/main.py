def solution(n, lost, reserve):

    answer1 = 0
    answer2 = 0

    array = [1] * (n+1)
    array[0] = 0

    for i in lost:
        array[i] = 0

    for i in reserve:
        array[i] += 1

    array1 = array.copy()
    array2 = array.copy()

    for i, v in enumerate(array1):
        if i <= 1:
            continue
        if v == 0 and array1[i-1] == 2:
            array1[i] += 1
            array1[i-1] -= 1

    for i, v in enumerate(array1):
        if i == 0 or i == len(array1) - 1:
            continue
        if v == 0 and array1[i+1] == 2:
            array1[i] += 1
            array1[i+1] -= 1

    for i in array1[1:]:
        if i >= 1:
            answer1 += 1

    for i, v in enumerate(array2):
        if i == 0 or i == len(array2) - 1:
            continue
        if v == 0 and array2[i+1] == 2:
            array2[i] += 1
            array2[i+1] -= 1

    for i, v in enumerate(array2):
        if i <= 1:
            continue
        if v == 0 and array2[i-1] == 2:
            array2[i] += 1
            array2[i-1] -= 1

    for i in array2[1:]:
        if i >= 1:
            answer2 += 1

    answer = max(answer1, answer2)

    return answer
