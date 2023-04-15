import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

grade = {
    "A+": 	4.5,
    "A0": 	4.0,
    "B+": 	3.5,
    "B0": 	3.0,
    "C+": 	2.5,
    "C0": 	2.0,
    "D+": 	1.5,
    "D0": 	1.0,
    "F":  0.0,
}

result = 0
cal = 0
total_num = 0

for _ in range(20):
    name, num, score = input().split()
    if score == 'P':
        continue
    num = float(num)
    total_num += num
    cal += num * grade[score]

print(cal/total_num)
