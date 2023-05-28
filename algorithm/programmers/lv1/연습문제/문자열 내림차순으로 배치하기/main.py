def solution(s):
    answer = ''
    arr = []

    for i in s:
        arr.append(ord(i))

    arr.sort()
    for i in range(len(arr)):
        arr[i] = chr(arr[i])

    arr.sort(reverse=True)
    for i in arr:
        answer += i
    return answer
