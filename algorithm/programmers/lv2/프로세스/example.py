def count_process_execution(priorities, location):
    n = len(priorities)
    count = 0

    while True:
        current_process = priorities[0]  # Get the first process in the queue

        # Check if there is a higher priority process waiting
        if any(priority > current_process for priority in priorities[1:]):
            # Move the current process to the end of the queue
            priorities.append(current_process)
        else:
            count += 1  # Increment the execution count

            # Check if the current process is the desired process
            if location == 0:
                return count

        # Remove the first process from the queue
        priorities = priorities[1:]

        # Update the location if the desired process is not at the front
        if location > 0:
            location -= 1
        else:
            location = len(priorities) - 1


# Example usage:
priorities = [2, 1, 3, 2]
location = 1
execution_count = count_process_execution(priorities, location)
print(execution_count)
