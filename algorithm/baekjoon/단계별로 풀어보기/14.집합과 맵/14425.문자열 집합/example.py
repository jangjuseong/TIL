import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

N, M = map(int, input().split())

# Read the strings in set S
S = set()
for i in range(N):
    S.add(input().strip())

# Loop through the M strings and check if they are in set S
count = 0
for i in range(M):
    string = input().strip()
    if string in S:
        count += 1

# Print the answer
print(count)
