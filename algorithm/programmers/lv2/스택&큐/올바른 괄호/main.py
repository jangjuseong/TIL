def solution(s):
    if s[0] == ')':
        return False
    opening_count = 0
    for i in s:
        if i == '(':
            opening_count += 1
        else:
            opening_count -= 1
        if opening_count < 0:
            return False
    if opening_count > 0:
        return False
    return True
