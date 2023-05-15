def solution(progresses, speeds):
    answer = []
    arr = []
    for i in range(len(progresses)):
        num = (100 - progresses[i]) // speeds[i]
        if (100 - progresses[i]) % speeds[i] > 0:
            num += 1
        arr.append(num)

    print(arr)
    count = 0
    max_num = arr[0]
    answer.append(1)
    for j, v in enumerate(arr[1:]):
        if v <= max_num:
            answer[count] += 1
        else:
            answer.append(1)
            count += 1
            max_num = v

    return answer
