def solution(n, words):
    answer = [0, 0]
    length = len(words)
    round_way = 0
    loser = 0
    losing_index = 0
    dictionary = {}

    for i, v in enumerate(words[:-1]):

        if v[-1] != words[i+1][0]:
            losing_index = i+2
            round_way = (losing_index + 1) // n
            print(round_way)

            loser = losing_index % n

            if loser == 0:
                loser = n

            answer[0] = loser
            answer[1] = round_way

            return answer

    return answer
