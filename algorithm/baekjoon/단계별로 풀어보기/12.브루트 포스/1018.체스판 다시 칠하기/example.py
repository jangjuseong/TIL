import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

n, m = map(int, input().split())

board = []
for i in range(n):
    row = input().strip()
    board.append([1 if row[j] == 'B' else 0 for j in range(m)])

print(board)

min_repaint = n * m  # initialize with a large value

for i in range(n-7):
    for j in range(m-7):
        # calculate the number of cells to be repainted assuming upper left is white
        num_repaint_w = 0
        for k in range(i, i+8):
            for l in range(j, j+8):
                if (k + l - i - j) % 2 == 0:  # cell should be white
                    num_repaint_w += (1 - board[k][l])
                else:  # cell should be black
                    num_repaint_w += board[k][l]

        # calculate the number of cells to be repainted assuming upper left is black
        num_repaint_b = 0
        for k in range(i, i+8):
            for l in range(j, j+8):
                if (k + l - i - j) % 2 == 0:  # cell should be black
                    num_repaint_b += (1 - board[k][l])
                else:  # cell should be white
                    num_repaint_b += board[k][l]

        min_repaint = min(min_repaint, num_repaint_w, num_repaint_b)

print(min_repaint)

# 이 코드도 제대로 이해 못하겠다.
