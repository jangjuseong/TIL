import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


array = []
for i in range(9):
    data = list(map(int, input().split()))
    array.append(data)

max_value = -1
max_row = 0
max_col = 0
for i in range(9):
    for j in range(9):
        if array[i][j] > max_value:
            max_value = array[i][j]
            max_row = i + 1
            max_col = j + 1

print(max_value)
print(max_row, max_col)
