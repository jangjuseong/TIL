# 라이브러리 사용

import sys
from math import gcd

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')


T = int(input())
for i in range(T):
    A, B = map(int, input().split())
    lcm = (A*B)//gcd(A, B)
    print(lcm)
