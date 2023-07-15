def checkNumber(string, array):
    if string == "D 1":
        if len(array) > 0:
            array.remove(max(array))
    elif string == "D -1":
        if len(array) > 0:
            array.remove(min(array))
    else:
        num = int(string[2:])
        array.append(num)


def solution(operations):
    store_answer = []
    answer = []

    for i in operations:
        checkNumber(i, store_answer)

    if len(store_answer) == 0:
        answer = [0, 0]
    else:
        answer.append(max(store_answer))
        answer.append(min(store_answer))

    return answer
