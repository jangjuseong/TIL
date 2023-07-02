def is_valid(s):
    stack = []
    for ch in s:
        if ch in ['(', '[', '{']:
            stack.append(ch)
        else:
            if not stack:
                return False
            if ch == ')' and stack[-1] == '(':
                stack.pop()
            elif ch == ']' and stack[-1] == '[':
                stack.pop()
            elif ch == '}' and stack[-1] == '{':
                stack.pop()
            else:
                return False
    return len(stack) == 0


def solution(s):
    count = 0
    length = len(s)
    for i in range(length):
        rotated = s[i:] + s[:i]
        if is_valid(rotated):
            count += 1
    return count
