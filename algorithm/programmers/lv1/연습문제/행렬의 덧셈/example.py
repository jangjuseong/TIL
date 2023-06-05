def solution(arr1, arr2):
    len_row = len(arr1[0])
    len_col = len(arr1)

    answer = [[0] * len_row for _ in range(len_col)]

    for i in range(len_col):
        for j in range(len_row):
            answer[i][j] = arr1[i][j] + arr2[i][j]

    return answer
