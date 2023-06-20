def solution(n):
    answer = 0

    arr = [i for i in range(1, n+1)]
    for i in range(n//2 + 2):
        num = 0
        for j in range(i, 0, -1):
            num += j
            if num == n:
                answer += 1
                num = 0
            elif num > n:
                num = 0
                break

    return answer

# 효율성 생각한다고 n을 반으로 쪼갰지만, 코드 짜기 더 복잡해지기만 할 뿐 큰 효율은 없다.
# 어차피 O(N^2)인건 같다.
