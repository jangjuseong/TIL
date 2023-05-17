def largest_number(numbers):
    numbers = list(map(str, numbers))  # Convert numbers to strings

    def compare(a, b):
        if a + b > b + a:
            return -1
        else:
            return 1

    # Sort the numbers using the custom comparison function
    numbers.sort(key=compare)
    # Join the sorted numbers into a single string
    largest_num = ''.join(numbers)

    return largest_num


# Example usage:
numbers1 = [6, 10, 2]
print(largest_number(numbers1))  # Output: "6210"

numbers2 = [3, 30, 34, 5, 9]
print(largest_number(numbers2))  # Output: "9534330"
