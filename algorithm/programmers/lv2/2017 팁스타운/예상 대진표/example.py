def solution(n, a, b):
    round = 1
    while True:
        if (a + 1) // 2 == (b + 1) // 2:
            return round
        a = (a + 1) // 2
        b = (b + 1) // 2
        round += 1
