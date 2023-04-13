import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

s = input()
s_arr = []
for i in s:
    s_arr.append(int(i))

result = s_arr[0]

for i in s_arr:
    if result == 0 or s_arr[i+1] == 0:
        # 여기서 IndexError: list index out of range 나는 이유?
        # 리스트에서 i가 있으면 그 다음 진행될 i를 미리 사용할 수 없는건가?
        # [이유] for 루프에서 i 변수는 입력 문자열 s_arr의 값을 나타내므로, if 문에서 s_arr[i]와 같은 인덱스 접근은 올바르지 않습니다. 따라서, if 문에서 s_arr[i] 대신에 i를 사용해야 합니다.
        result = result + s_arr[i+1]
    else:
        result = result * s_arr[i+1]
    if i == s_arr[-2]:
        break

print(result)
