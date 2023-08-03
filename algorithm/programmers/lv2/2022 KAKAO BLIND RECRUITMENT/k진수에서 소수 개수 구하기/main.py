def convert_to_base_n(number, base):
    result = ''
    while number > 0:
        result = str(number % base) + result
        number = number // base

    return result


def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6

    return True


def solution(n, k):
    number = convert_to_base_n(n, k)
    count = 0

    splited_number = number.split('0')
    for num in splited_number:
        if num == '':
            continue
        if is_prime(int(num)):
            count += 1

    return count
