from collections import Counter


def solution(k, tangerine):
    answer = 0
    counter = Counter(tangerine)
    sorted_counts = counter.most_common()

    for size, count in sorted_counts:
        if k <= 0:
            return answer
        answer += 1
        k -= count

    return answer
