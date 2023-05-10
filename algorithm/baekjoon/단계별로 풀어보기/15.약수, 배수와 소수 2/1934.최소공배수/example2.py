# without library

import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


# define a function to calculate the GCD of two numbers using the Euclidean algorithm
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


# read the number of test cases
T = int(input())

for i in range(T):
    # read the values of A and B for each test case
    A, B = map(int, input().split())

    # calculate the LCM using the formula LCM(A,B) = (A*B)/GCD(A,B)
    lcm = (A*B)//gcd(A, B)

    # print the result
    print(lcm)
