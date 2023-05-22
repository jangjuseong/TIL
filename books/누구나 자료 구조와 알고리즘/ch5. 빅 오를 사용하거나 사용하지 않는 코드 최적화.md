# 5장 빅 오를 사용하거나 사용하지 않는 코드 최적화

- `빅 오`: 알고리즘을 서로 비교하고 주어진 상황에 알맞은 알고리즘을 결정하게 해주는 훌륭한 도구
    - 빅 오가 유일한 도구는 **아니다**
    - 빅 오 표기법에서는 한 알고리즘이 다른 알고리즘보다 훨씬 빠른 경우에도 두 경쟁 알고리즘을 정확히 똑같은 방식으로 표현하기도 한다.

# 5.1 선택 정렬

- 선택 정렬(selection sort)
    - 셀 가장 왼쪽부터 시작하여 그 이후의 최솟값들을 찾아 서로 바꾸는 정렬

# 5.2 선택 정렬 실제로 해보기

```jsx
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}
```

# 5.3 선택 정렬의 효율성

- 비교 횟수: 원소 N개가 있을 때 `(N-1) + (N-2) + (N-3) + · · · + 1` 번의 비교
- 교환 횟수: 한 패스스루 당 최대 한 번
    - 배열이 역순으로 정렬된 최악의 시나리오에서는 버블 정렬과 달리 비교할 때마다 **빠짐없이** 교환을 **한 번** 해야 한다.
- 선택 정렬은 버블 정렬보다 단계 수가 반 정도 적다
    - 즉, 선택 정렬이 두 배 더 빠르다.

# 5.4 상수 무시하기

- 빅 오 표기법은 상수를 무시한다.
- 빅 오 표기법은 지수가 아닌 수는 포함하지 않는다는 것을 단순히 수학적으로 표현한 문장이다.
- 빅 오로는 정확히 똑같이 표현하는 두 알고리즘에 대해 한쪽이 다른 한쪽보다 100배다 빠를 수 있다는 이 규칙은 빅 오 표기법을 완전히 쓸모없어 보이게 만든다.

# 5.5 빅 오 카테고리

- 빅 오 표기법은 일반적인 카테고리의 알고리즘 속도만 고려한다
- O(N) 알고리즘과 O(N²) 알고리즘을 비교할 때 두 효율성간 차이가 너무 커서 O(N)이 실제로 O(2N)이든 O(N/2)이든 심지어 O(100N)이든 별로 중요하디 않다.
    - O(N): 직선 성장(straight growth)
    - O(N²): 지수 성장(exponential growth)
- 빅 오에서 서로 다른 카테고리에 속하는 두 효율성을 비교할 때 일반적인 카테고리로 분류하는 것으로 충분하다.
- 빅 오에서 서로 다른 카테고리에 속하는 알고리즘을 대조할 때는 빅 오가 완벽한 도구이지만, 버블 정렬과 선택 정렬처럼 같은 카테고리에 속하는 두 알고리즘이라면 어떤 알고리즘이 더 빠를지 알기 위해 더 분석해야 한다.

## 5.5.1 실제 예제

```python
def print_numbers_version_one(upperlimit):
    number = 2

    while number <= upperlimit:
        if number % 2 == 0:
            print(number)

        number += 1

def print_numbers_version_one(upperlimit):
    number = 2

    while number <= upperlimit:
        print(number)

        number += 2
```

- 첫 번째 버전: N단계
    - O(N)
- 두 번째 버전: N/2단계
    - 상수를 버리고 마찬가지로 O(N)

## 5.5.2 중요한 단계

- 첫 번째 버전이 N 단계가 필요하다고 말했다. 하지만 정말로 딱 N단계가 필요할까? 실제로는 여러 단계 필요
    1. number가 2로 나누어 떨어지는지 확인하는 비교 단계 (if number % 2 == 0)
    2. 짝수일 때만 일어나는 출력 단계(print(number))
        - 따라서 출력은 **한 번 걸러** 일어난다
    3. 매 루프마다 실행되는 number += 1
- 위의 단계들 중 어떤 단계가 중요할까?
    - **모든 단계가 중요하다.** 단지 빅 오 용어로 단계를 표현할 때 상수를 버리고 표현식을 단순화할 뿐이다.
    - 모든 단계가 중요하지만 상수를 제거함으로써 루프 안에서 정확히 무슨 일이 일어나는지 보다는 실질적으로 루프가 실행되는 횟수에 초점을 맞추게 된다.