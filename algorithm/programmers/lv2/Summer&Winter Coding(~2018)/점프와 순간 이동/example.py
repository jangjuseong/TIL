def solution(N):
    current = 0
    battery = 0

    while N > 0:
        if N % 2 == 0:
            N //= 2
        else:
            N -= 1
            battery += 1

    return battery
