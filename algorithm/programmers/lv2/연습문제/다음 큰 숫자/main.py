def solution(n):
    answer = n
    count = 0

    num_1 = str(bin(n)[2:]).count("1")
    while count != num_1:
        answer += 1
        count = str(bin(answer)[2:]).count("1")

    return answer
