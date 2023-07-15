# heapq로 풀기!

import heapq


def solution(operations):
    heap = []

    for operation in operations:
        op, num = operation.split()
        num = int(num)

        if op == "I":
            heapq.heappush(heap, num)
        elif heap:
            if num == 1:
                heap.pop(heap.index(heapq.nlargest(1, heap)[0]))
            else:
                heapq.heappop(heap)

    if heap:
        return [max(heap), min(heap)]
    else:
        return [0, 0]

    return answer
