def solution(s):
    answer = [0, 0]
    length = len(s)

    while s != '1':
        answer[0] += 1
        zeros_removed = 0
        new_s = ''
        for i in range(length):
            if s[i] == '1':
                new_s += '1'
            else:
                zeros_removed += 1
        s = bin(len(new_s))[2:]
        length = len(s)
        answer[1] += zeros_removed

    return answer
