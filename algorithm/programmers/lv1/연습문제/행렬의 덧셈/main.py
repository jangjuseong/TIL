def solution(arr1, arr2):
    answer = [[]]

    len_row = len(arr1[0])
    len_col = len(arr1)

    answer1 = [0] * len_row
    answer = [answer1] * len_col

    for i in range(len_col):
        for j in range(len_row):
            answer[i][j] = arr1[i][j] + arr2[i][j]

    return answer

# answer의 인덱스마다 같은 결과가 나온다..
