def solution(park, routes):
    start_pos = None
    width = len(park[0])
    height = len(park)

    for j in range(height):
        for i in range(width):
            if park[j][i] == 'S':
                start_pos = [j, i]
                break

    current_pos = start_pos

    for route in routes:
        direction, distance = route.split()
        distance = int(distance)

        for _ in range(distance):
            if direction == 'E':
                new_position = [current_pos[0], current_pos[1] + 1]
            elif direction == 'S':
                new_position = [current_pos[0] + 1, current_pos[1]]
            elif direction == 'W':
                new_position = [current_pos[0], current_pos[1] - 1]
            elif direction == 'N':
                new_position = [current_pos[0] - 1, current_pos[1]]

            if not (0 <= new_position[1] < width and 0 <= new_position[0] < height):
                continue

            if park[new_position[0]][new_position[1]] == 'X':
                continue

            current_pos = new_position
            print(current_pos)

    return current_pos

# 왜 안풀리는지 모르겠다....
# 예제 3번이 안풀린다
