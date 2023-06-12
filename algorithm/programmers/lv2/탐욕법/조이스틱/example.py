def solution(name):
    # Define the minimum number of moves required for each letter from A to Z
    moves = [min(ord(c) - ord('A'), ord('Z') - ord(c) + 1) for c in name]

    # Initialize the total number of moves and the current position of the cursor
    total_moves = sum(moves)
    cursor_pos = 0

    # Iterate over the characters of the name
    for i in range(len(name)):
        # Calculate the next position by moving right from the current position
        next_pos = cursor_pos + 1

        # Find the next position that requires a move
        while next_pos < len(name) and moves[next_pos] == 0:
            next_pos += 1

        # Calculate the number of moves required to reach the next position
        right_moves = next_pos - cursor_pos

        # Calculate the number of moves required to reach the previous position (wrapping around)
        left_moves = len(name) - next_pos + cursor_pos

        # Update the total number of moves and move the cursor to the optimal position
        total_moves += min(right_moves, left_moves)
        cursor_pos = next_pos

    return total_moves

# 이거 봐도 잘 이해 안간다
