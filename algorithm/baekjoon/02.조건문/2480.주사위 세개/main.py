import sys
sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

a, b, c = map(int, input().split())

price = 0

if a == b and a == c:
    price = 10000 + a*1000
    print(price)
elif a == b and a != c:
    price = 1000 + a * 100
    print(price)
elif b == c and b != a:
    price = 1000 + b * 100
    print(price)
elif c == a and c != b:
    price = 1000 + c * 100
    print(price)
else:
    array = [a, b, c]
    print(max(array)*100)

# 더 간단하게 할 수 있음
# if(a==b==c):
#     print(10000+a*1000)
# elif a==b or a==c:
#     print(1000+a*100)
# elif b==c:
#     print(1000+b*100)
# else:
#     print(max(a,b,c)*100)
