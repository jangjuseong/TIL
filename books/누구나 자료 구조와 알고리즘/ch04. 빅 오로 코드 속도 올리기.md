# 4장 빅 오로 코드 속도 올리기

# 4.1 버블 정렬

`정렬 알고리즘`: 컴퓨터 과학 분야에서 폭넓게 연구된 주제이며 다음의 문제를 해결한다.

> 정렬되지 않은 배열이 주어졌을 때, 어떻게 오름차순으로 정렬할 수 있을까?

### 버블 정렬

`버블 정렬`은 인접한 요소의 순서가 잘못된 경우 반복적으로 교체하는 간단한 정렬 알고리즘. 전체 목록이 오름차순 또는 내림차순으로 정렬될 때까지 인접한 요소를 비교하고 교체한다. 가장 큰 요소 또는 가장 작은 요소는 각 반복 후 올바른 위치로 "버블링"되므로 "버블 정렬"이라는 이름이 붙게 되었다.

# 4.2 버블 정렬 실제로 해보기

-   `버블`: 각 패스스루마다 정렬되지 않은 값 중 가장 큰 값. 버블 정렬을 통해 “버블”이 올바른 위치로 가게 된다.
-   첫 번째 패스스루에서 교환을 적어도 한 번 수행하게 되면 다음 패스스루도 수행해야 한다.

### 버블 정렬 구현(python)

```python
def bubble_sort(arr):
    unsorted_until_index = len(list) - 1
    # 아직 정렬되지 않은 배열의 가장 오른쪽 인덱스. 처음에는 배열의 마지막 인덱스로 초기화한다.
  	sorted = False
    # 처음에는 정렬 되어있지 않은 상태이므로 False 할당

    while not sorted:
			sorted = True
			# 루프 한 번(1 패스스루) 돌 때, 정렬되어 있다고 가정하고 값을 교환하면 다시 False 할당
    	for i in range(unsorted_until_index):
				if list[i] > list[i+1]:
					list[i], list[i+1] = list[i+1], list[i]
					sorted = False
			unsorted_until_index -= 1

return list
```

# 4.3 버블 정렬의 효율성

버블 정렬 알고리즘은 두 가지 중요한 단계를 포함한다

-   `비교(comparison)`: 어느 쪽이 더 큰지 두 수를 비교한다
-   `교환(swap)`: 정렬하기 위해 두 수를 교환한다

## 버블 정렬의 시간 복잡도

-   `O(N²)`
-   이차 시간(quadratic time)이라고도 부른다

# 4.4 이차 문제

-   루프 내에 다른 루프를 중첩하는 알고리즘이라면 대부분(항상은 아니다) O(N²)이다. 따라서 중첩 루프가 보이면 O(N²)이라는 것을 떠올려야 한다.
-   O(N²)는 상대적으로 느린 알고리즘으로 간주된다. 느린 알고리즘을 마주할 때는 시간을 들여 더 빠른 대안은 없을지 깊이 생각해 보는 것이 좋다.

# 4.5 선형 해결법

```jsx
function hasDuplicateValue(array) {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] = 1;
        }
    }
    return false;
}
```

-   위의 알고리즘은 O(N)
-   (그러나 메모리를 더 사용한다는 단점이 있음)
