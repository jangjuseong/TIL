```python
def solution(s):
    answer = []
    cnt_zeros = 0
    cnt = 0

    while s != '1':
        cnt += 1
        s = bin(int(s.replace('0', ''), 2))[2:]
        cnt_zeros += len(s) - s.count("1")

    answer.append(cnt)
    answer.append(cnt_zeros)

    return answer

```

처음에 이런식으로 코드를 썼다.
이 코드는 실행 타임이 초과되서 문제를 제출할 수 없었다.

replace, count가 반복적으로 일어나서 시간이 오래 걸린다.
