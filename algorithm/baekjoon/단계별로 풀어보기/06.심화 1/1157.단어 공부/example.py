import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


alphabet = [0] * 26
data = input().upper()

for i in data:
    if i.isalpha():
        alphabet[ord(i)-ord('A')] += 1

max_count = max(alphabet)

if alphabet.count(max_count) > 1:
    print('?')
else:
    print(chr(alphabet.index(max_count) + ord('A')))
