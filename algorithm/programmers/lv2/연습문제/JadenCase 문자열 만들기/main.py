def solution(s):
    answer = ''

    s = s.lower()
    arr = list(s.split(' '))
    array = list

    for i, v in enumerate(arr):
        array = list(v)

        for j, w in enumerate(array):
            if w.isdigit():
                break
            array[j] = array[j].upper()
            break

        string = ''.join(array)
        answer += f' {string}'

    answer = answer.lstrip()

    return answer
