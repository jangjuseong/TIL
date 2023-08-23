# 6장 긍정적인 시나리오 최적화

# 6.1 삽입 정렬

최악의 경우가 아닌 다른 시나리오를 분석하는 것에 어떤 장점이 있는지 알아보기

# 6.2 삽입 정렬 실제로 해보기

```python
def insertion_sort(array):
    for index in range(1, len(array)):

        temp_value = array[index]
        position = index - 1

        while position >= 0:
            if array[position] > temp_value:
                array[position + 1] = array[position]
                position -= 1
            else:
                break

        array[position + 1] = temp_value

    return array
```

# 6.3 삽입 정렬의 효율성

### 단계 분석

- 비교: `N²/2`
- 시프트: `N²/2`
- 삭제: `N-1`
- 삽입: `N-1`
- 총 합: `N² +2N - 2`

➡️ 빅 오에는 상수를 무시한다는 규칙이 있다.

- O(N² +2N)

### 새로운 중요한 규칙

- 다양한 차수가 한데 섞여 있을 때 빅 오 표기법은 가장 높은 차수의 N만 고려한다.
- O(N² +2N)

# 6.4 평균적인 경우

- 최악의 시나리오에서는 선택 정렬이 삽입 정렬보다 빠른게 사실이다.
- 하지만 평균 시나리오도 중요하게 고려해야 한다.
  - 가장 자주 일어나는 경우가 평균 시나리오이기 때문이다.
- 삽입 정렬은 시나리오에 따라 성능이 크게 좌우됨

|           | 최선의 시나리오 | 평균 시나리오 | 최악의 시나리오 |
| --------- | --------------- | ------------- | --------------- |
| 선택 정렬 | N²/2            | N²/2          | N²/2            |
| 삽입 정렬 | N               | N²/2          | N²              |

# 6.5 실제 예제

```jsx
function intersection(firstArray, secondArray) {
  let result = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[i]) {
        result.push(firstArray[i]);
      }
    }
  }
}
```

- 이 코드는 간단한 중첩 루프를 실행한다.
- 교집합을 구하는 위 알고리즘의 효율성은 O(N²)
- 알고리즘을 향상시킬 방법?

```jsx
function intersection(firstArray, secondArray) {
  let result = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[i]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }
  return result;
}
```

- 공통 값을 찾았다면 굳이 두 번째 루프를 끝까지 실행시킬 수가 없으므로 한 단어만 추가로 구현한다.
  - `break`
- 공통 값이 하나도 없는 최악의 시나리오에서는 N²를 수행해야겠지만, 평균적인 경우에는 성능이 N과 N² 사이쯤일 것이다.

# 6.6 마무리

- 최선의, 평균, 최악의 시나리오를 구분하는 능력은 기존 알고리즘을 최적화해서 훨씬 빠르게 만드는 것만큼이나 사용자 요구에 맞는 최적의 알고리즘을 고르는 핵심 기술이다.
- 최악의 경우를 대비하는 것도 좋지만 대부분은 평균적인 경우가 일어난다는 점을 명심하자.
