import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())
sequence = list(map(int, input().split()))

max_ending_here = 0
max_so_far = sequence[0]

for i in range(n):
    max_ending_here = max(sequence[i], max_ending_here + sequence[i])
    print('max ending here: ', max_ending_here)
    max_so_far = max(max_so_far, max_ending_here)
    print('max sofar: ', max_so_far)

print(max_so_far)
