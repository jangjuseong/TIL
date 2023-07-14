import re


def solution(s):
    extracted = re.findall('\d+', s)
    elements = list(map(int, extracted))

    count_dict = {}

    for element in elements:
        if element not in count_dict:
            count_dict[element] = 1
        else:
            count_dict[element] += 1

    sorted_elements = sorted(
        count_dict.keys(), key=lambda x: count_dict[x], reverse=True)

    return sorted_elements
