import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

array = [''] * 5
for i in range(5):
    array[i] = input().split()

print(array)
result = ''

# for i in range(5):
#     for j in range(len(array[i][0])):
#         print(array[i][0][j])

# max_length = 0
# for i in array:
#     if len(i[0]) >= max_length:
#         max_length = len(i[0])
# print(max_length)

# # for i in range(5):
# #     for j in range(max_length):

# for j in range(max_length):
#     for i in range(len(array)):
#         print(array[i][0][j])

# for i in array:
#     result += i[0][0]

# print(result)

# for i in array:
#     result += i[0][1]

# print(result)

# for i in array:
#     result += i[0][2]

# print(result)

# for i in array:
#     result += i[0][3]

# print(result)

# for i in array:


# print(array)

# num = 0
# for i in array:
#     result += i[0][0]
#     num += 1
#     if len(i[0]) < num:
#         array.remove(i)

# print(result)

while True:
    for i in array:
        result += i[0][1]
        array.remove(i[0][1])
        print(result)

# # 풀다가 시간 너무 오래 소요되서 포기
