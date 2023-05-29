def solution(participant, completion):
    answer = ''
    dictionary = {}
    for person in participant:
        if person in dictionary:
            dictionary[person] += 1
        else:
            dictionary[person] = 1
    for i in completion:
        dictionary[i] -= 1
        
    for key, val in dictionary.items():
        if val == 1:
            answer = key

    return answer