## 리스트 곱셈

알고리즘 문제를 풀던 중 기대와는 다른 결과 값이 나와서 공부한 후에 이 글을 작성하게 되었습니다.

주어진 입력 값은 [[1], [2]], [[3], [4]]이고 결과 값은 [[4], [6]]이 나올 것으로 예상했습니다. 하지만, 결과 값이 [[6], [6]]이 나왔습니다.

```python
def solution(arr1, arr2):
    answer = [[]]

    len_row = len(arr1[0])
    len_col = len(arr1)

    answer1 = [0] * len_row
    answer = [answer1] * len_col

    for i in range(len_col):
        for j in range(len_row):
            answer[i][j] = arr1[i][j] + arr2[i][j]
            print(answer[i][j])

    return answer
```

원인을 찾아보니 리스트 곱셈과 참조에 대한 문제 때문이었습니다.
위의 방식대로라면, len_row의 길이만큼 [0]이 반복되어 answer1을 생성하게 됩니다. 그런데, answer1을 len_col의 길이만큼 반복하여 또 다시 answer을 생성할 때 [0]이 담긴 새로운 빈 배열을 만드는게 아니라 answer의 인덱스를 그대로 참조한 배열이 만들어지게 됩니다.

조금 더 쉬운 설명을 위해서, 다른 예시로 설명해보도록 하겠습니다.

```python
my_list = [1, 2]
new_list = [my_list] * 3

print(new_list)
# Output: [[1, 2], [1, 2], [1, 2]]

my_list[0] = 5
print(new_list)
# Output: [[5, 2], [5, 2], [5, 2]]
```

리스트 곱셈으로 리스트를 초기화하게 되면 위와 같은 문제가 발생합니다. new_list는 my_list를 참조하여 만들어졌기 때문에 my_list의 동일한 인덱스에 해당하는 new_list의 값들이 동시에 변경되게 됩니다.

## 해결 방법

### 리스트 컴프리헨션

해결 방법은 리스트 컴프리헨션을 이용하는 것입니다.

```python
[[0] * len_row for _ in range(len_col)]
```

위와 같은 방식으로 중첩된 리스트를 초기화 해주게 되면,len_col의 범위(길이)만큼 새로운 [0]을 생성해주기 때문에 참조의 문제가 사라지게 됩니다. 따라서 처음의 코드는 다음과 같이 변경할 수 있습니다.

```python
def solution(arr1, arr2):
    len_row = len(arr1[0])
    len_col = len(arr1)

    answer = [[0] * len_row for _ in range(len_col)]

    for i in range(len_col):
        for j in range(len_row):
            answer[i][j] = arr1[i][j] + arr2[i][j]

    return answer
```
