import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n = int(input())
arr = list(map(int, input().split()))

max_value = max(arr)
max_value_index = arr.index(max_value)

max1 = []
max2 = []
max1_value = max_value
max2_value = max_value

for i in arr[max_value_index-1::-1]:
    max1_value += i
    max1.append(max1_value)

for i in arr[max_value_index + 1:]:
    max2_value += i
    max2.append(max2_value)

print(max1)
print(max2)

print(max(*max1, *max2))
