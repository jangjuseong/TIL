import sys

sys.stdin = open('../../../example.txt', 'r', encoding='utf-8')

GRADE_TABLE = {
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

total_units = 0
total_points = 0

for _ in range(20):
    name, units, grade = input().split()
    if grade == 'P':
        continue
    units = float(units)
    total_units += units
    total_points += units * GRADE_TABLE[grade]

gpa = total_points / total_units
print(f'{gpa:.2f}')
