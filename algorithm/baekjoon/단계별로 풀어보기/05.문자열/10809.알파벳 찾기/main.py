import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

alphabet = list('abcdefghijklmnopqrstuvwxyz')
data = [-1] * 26
a = list(input())

for i in a:
    index = a.index(i)
    alphabet_index = alphabet.index(i)
    data[alphabet_index] = index


print(*data)
