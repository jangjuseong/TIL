import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


data = input()

result = int(data[0])

for i in range(1, len(data)):
    num = int(data[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num

print(result)

# ---------------------- 내가 푼 방식대로 올바르게 풀었다면, ↓↓↓↓↓↓↓↓↓↓ --------

# s = input()
# s_arr = []
# for i in s:
#     s_arr.append(int(i))

# result = s_arr[0]

# for i in s_arr[1:]:
#     if result == 0 or i == 0:
#         result = result + i
#     else:
#         result = result * i

# print(result)
