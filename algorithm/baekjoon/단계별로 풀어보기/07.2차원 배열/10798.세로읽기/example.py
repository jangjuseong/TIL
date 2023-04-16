import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


# 다섯 개의 단어 입력 받기
words = []
for i in range(5):
    words.append(input())

# 각 열마다의 글자들을 찾아 세로로 읽은 결과 만들기
result = ''
for i in range(15):
    for j in range(5):
        # j번째 단어에 i번째 글자가 있으면 result에 추가
        if i < len(words[j]):
            result += words[j][i]

# 결과 출력
print(result)
