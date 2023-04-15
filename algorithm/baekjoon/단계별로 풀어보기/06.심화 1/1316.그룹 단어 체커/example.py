import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n = int(input())

count = 0

for _ in range(n):
    word = input().strip()  # 단어 입력 및 공백 제거
    used = []  # 이미 사용한 문자 저장할 리스트
    is_group = True  # 그룹 단어 여부

    for i, char in enumerate(word):
        # 이전 문자와 현재 문자가 다르다면
        if i > 0 and char != word[i-1]:
            # 현재 문자가 이미 사용한 문자 중에 있다면
            if char in used:
                is_group = False  # 그룹 단어가 아님
                break
            else:
                used.append(word[i-1])  # 이전 문자를 사용한 문자 리스트에 추가

    # 마지막 문자가 이미 사용한 문자 중에 있다면 그룹 단어가 아님
    if is_group and word[-1] in used:
        is_group = False

    if is_group:
        count += 1  # 그룹 단어의 개수 증가

print(count)  # 그룹 단어의 개수 출력
