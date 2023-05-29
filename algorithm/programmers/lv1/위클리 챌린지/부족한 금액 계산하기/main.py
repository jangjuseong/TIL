def solution(price, money, count):
    answer = -1
    new_price = 0
    for i in range(1, count+1):
        new_price += price * i

    answer = new_price-money
    if answer <= 0:
        answer = 0

    return answer
