import sys

sys.stdin = open('../../example.txt', 'r', encoding='utf-8')

n = int(input())
required_number = int(input())
materials = list(map(int, input().split()))

material_set = set(materials)
count = 0

for material in materials:
    complement = required_number - material
    if complement in material_set and complement != material:
        count += 1

count = count // 2

print(count)
