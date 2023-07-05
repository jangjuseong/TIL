def solution(elements):
    length = len(elements)
    # elements를 2배로 확장하여 원형 수열을 구현

    extended_elements = elements * 2

    result_set = set()
    # 연속 부분 수열의 합을 구함
    for sub_seq_length in range(1, length + 1):
        for i in range(length):
            result_set.add(sum(extended_elements[i:i+sub_seq_length]))

    # 연속 부분 수열의 합으로 만들 수 있는 수의 개수를 반환
    return len(result_set)

# 브루트포스
