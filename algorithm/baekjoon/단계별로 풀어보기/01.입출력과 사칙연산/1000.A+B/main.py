with open('../input.txt', 'r', encoding='utf-8') as f:
    input_data = f.read().strip().split('\n')

a, b = map(int, input_data[0].split())
print(a + b)
