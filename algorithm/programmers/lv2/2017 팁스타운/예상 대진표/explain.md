```python
import math


def solution(n, a, b):
    answer = 0
    t = int(math.log2(n))

    answer = t
    min_num = min(a, b)
    max_num = max(a, b)
    while n != 1:
        if n == 2:
            answer = 1
            return
        n /= 2
        if min_num <= n and max_num > n:
            return answer
        elif max_num <= n:
            answer -= 1

    return answer
```

n이 위로 커질 수도 있다는 걸 한번에 캐치하지 못해서 시간 초과
