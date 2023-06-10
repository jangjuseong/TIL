def solution(t, p):
    answer = 0
    length = len(p)

    if length == 1:
        for i, v in enumerate(t):
            if v <= p:
                answer += 1
        return answer

    for i, v in enumerate(t[:-length+1]):
        if v > p[0]:
            continue
        elif v < p[0]:
            answer += 1
        else:
            if t[i:i+length] <= p:
                answer += 1

    return answer
