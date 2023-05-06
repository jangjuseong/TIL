import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


n = int(input())

num_bags = n // 5  # number of 5kg bags we can use

while num_bags >= 0:
    remaining_weight = n - num_bags * 5
    if remaining_weight % 3 == 0:  # check if we can use some 3kg bags
        num_bags += remaining_weight // 3
        print(num_bags)
        break
    num_bags -= 1

if num_bags < 0:  # we couldn't find a solution
    print(-1)
