def solution(n, left, right):
    result = []
    for i in range(left, right + 1):
        row = i // n
        col = i % n
        num = max(row, col) + 1
        result.append(num)
    return result
