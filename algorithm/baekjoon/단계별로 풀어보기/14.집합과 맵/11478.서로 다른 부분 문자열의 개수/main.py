import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

S = input()
arr = []

num = 0
part = 1

while True:
    if part == len(S):
        break
    for i in range(0, len(S)-part+1):
        arr.append(S[i:part+i])
    part += 1

arr.append(S)


print(len(set(arr)))
