import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

array = list(map(int, list(str(n))))
print(sum(array))
split_sum = sum(array) + n
print(split_sum)

# 생성자가 어떻게 주어진 자연수보다 작은거지?
