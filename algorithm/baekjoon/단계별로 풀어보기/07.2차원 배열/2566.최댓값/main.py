import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

array = []
for i in range(9):
    data = list(map(int, input().split()))
    array.append(data)

max_value = -1
index = [0, 0]
for i in array:
    if max(i) > max_value:
        max_value = max(i)
        index[0] = array.index(i) + 1
        index[1] = i.index(max_value) + 1

print(max_value)
print(*index)

# 이렇게 제출하면 틀린 답안으로 나옴
# max value를 0으로 둬서 틀렸다고 나왔다. 따라서 max value 값을 -1로 두니 정답.
