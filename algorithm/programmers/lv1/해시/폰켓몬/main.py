def solution(nums):
    answer = 0
    counts = {}
    for num in nums:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1
    print(len(counts))
    half = len(nums) / 2

    if len(counts) >= half:
        answer = half
    else:
        answer = len(counts)
    return answer
