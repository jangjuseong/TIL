def solution(prices):
    # Initialize a list to store the non-falling seconds for each price
    non_falling_seconds = [0] * len(prices)
    # The last price will always have 0 non-falling seconds
    non_falling_seconds[-1] = 0

    # Iterate through the prices in reverse order, starting from the second last price
    for i in range(len(prices) - 2, -1, -1):
        if prices[i] <= prices[i + 1]:  # If the current price is less than or equal to the next price
            # Increment non-falling seconds by 1
            non_falling_seconds[i] = non_falling_seconds[i + 1] + 1
        else:
            # Reset non-falling seconds to 0 if the price falls
            non_falling_seconds[i] = 0

    return non_falling_seconds
