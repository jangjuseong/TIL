def solution(answers):

    length = len(answers)
    answer1 = []
    answer2 = []
    answer3 = []

    while len(answer1) <= length:
        answer1 += [1, 2, 3, 4, 5]

    while len(answer2) <= length:
        answer2 += [2, 1, 2, 3, 2, 4, 2, 5]

    while len(answer3) <= length:
        answer3 += [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    answer1 = answer1[0:length]
    answer2 = answer2[0:length]
    answer3 = answer3[0:length]

    answersheet = [[], [], [], []]

    for i, v in enumerate(answers):
        if answer1[i] == v:
            answersheet[1].append(1)
        if answer2[i] == v:
            answersheet[2].append(1)
        if answer3[i] == v:
            answersheet[3].append(1)

    table = [0, 0, 0, 0]
    table[1] = sum(answersheet[1])
    table[2] = sum(answersheet[2])
    table[3] = sum(answersheet[3])

    max_num = max(table)
    answer = [i for i, v in enumerate(table) if v == max_num]

    print(answer)

    return answer
