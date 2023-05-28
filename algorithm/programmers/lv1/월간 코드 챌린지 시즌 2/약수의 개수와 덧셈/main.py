def solution(left, right):
    answer = 0
    arr = [i for i in range(left, right+1)]
    for i in arr:
        if i == 1:
            answer -= 1
            continue
        count = 2
        for j in range(2, i):
            if i % j == 0:
                count += 1
        if count % 2 == 0:
            answer += i
        else:
            answer -= i
    return answer
