def solution(name):
    spell_move = sum(min(ord(spell) - ord('A'), ord('Z') -
                     ord(spell) + 1) for spell in name)
    cursor_move = len(name) - 1

    for i in range(len(name)):
        next = i + 1
        while next < len(name) and name[next] == 'A':
            # 이 부분 잘 이해 안감
            next += 1

        cursor_move = min(cursor_move, i + len(name) -
                          next + min(i, len(name) - next))
        # 이 부분 잘 이해 안감

    return spell_move + cursor_move
