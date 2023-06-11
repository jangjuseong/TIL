def solution(s):
    answer = ''
    arr = list(s.split(' '))

    for i, v in enumerate(arr):
        array = list(v)
        for j, w in enumerate(v):
            if j % 2 == 0:
                array[j] = array[j].upper()
            else:
                array[j] = array[j].lower()
        arr[i] = ''.join(array)
    answer = ' '.join(arr)

    return answer
