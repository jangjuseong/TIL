# 7장 일상적인 코드 속 빅오

- 코드를 보고 코드의 효율성을 알아내는 것이 최적화의 첫 번째 단계
- 더욱이 코드가 빅 오 표기법 관점에서 어떤 카테고리에 해당하는지 알면 애초에 최적화가 정말 필요한지 판단할 수 있다
  - 예) O(N²)인 알고리즘은 일반적으로 느리게 본다. → 설령 O(N²)이 최선일지라도 최적화 할 방법을 찾으려고 노력해야 한다.

# 7.1 짝수의 평균

```jsx
function averageOfEvenNumbers(array) {
  let sum = 0.0; // 1
  let countOfEvenNumbers = 0; // 1

  for (let number of array) {
    // 루프 내부 코드에 따라 N의 계수가 달라진다
    if (number % 2 === 0) {
      // N
      sum += number; // N
      countOfEvenNumbers++; // N
    }
  }

  return sum / countOfEvenNumbers; // 1
}
```

가장 먼저 할 일은 데이터 원소 “N”이 무엇인지 알아내는 것

그 다음으로, 값 N개를 처리하는 데 얼마나 많은 단계 수가 필요한지 알아내는 것

따라서 위의 코드는 O(3N+3) ⇒ O(N) (※ 상수 무시)

# 7.2 단어 생성기

```jsx
function wordBuilder(array) {
  let collection = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        collection.push(array[i] + array[j]);
      }
    }
  }

  return collection;
}
```

중첩 루프 알고리즘. 대표적인 O(N²)

```jsx
function wordBuilder3(array) {
  let collection = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (i !== j && j !== k && i !== k) {
          collection.push(array[i] + array[j] + array[k]);
        }
      }
    }
  }
  return collection;
}
```

삼중 중첩 루프 알고리즘. 대표적인 O($N^3$)

# 7.3 배열 예제

```jsx
function sample(array) {
  let first = array[0];
  let middle = array[Math.floor(array.length / 2)];
  let last = array[array.length - 1];

  return [first, middle, last];
}
```

- 함수로 전달된 배열이 핵심 데이터니 N은 배열 원소의 수.
- 하지만 함수는 N이 얼마든 걸리는 단계 수가 동일하다.
  - 배열의 시작과 중간, 마지막 인덱스 읽기는 배열 크기에 상관없이 딱 한 단계.
  - 배열의 길이를 찾고 그 길이를 2로 나누는 것도 한 단계
- 단계 수가 상수이므로, 즉 N에 관계 없이 일정하므로 이 알고리즘은 O(1)

# 7.4 평균 섭씨 온도 구하기

```jsx
function averageCelsius(fahrenheitReadings) {
  let celsiusNumbers = [];

  for (let i = 0; i < fahrenheitReadings.length; i++) {
    let celsiusConversion = (fahrenheitReadings[i] - 32) / 1.8;
    celsiusNumbers.push(celsiusConversion);
  }

  let sum = 0.0;

  for (let j = 0; j < celsiusNumbers.length; j++) {
    sum += celsiusNumbers[j];
  }

  return sum / celsiusNumbers.length;
}
```

- 루프 두 개를 나란히 실행하므로 O(N)

# 7.5 의류 상표

```jsx
function markInventory(clothingItems) {
  let clothingOptions = [];

  for (let item of clothingItems) {
    for (let size = 1; size <= 5; size++) {
      clothingOptions.push(item + ' Size: ' + size);
    }
  }

  return clothingOptions;
}
```

- 중첩 루프가 두 개 들어간 코드이므로 O(N²)을 선언하고 싶을 것이다.
- 하지만 중첩 루프가 O(N²)이 되는 경우는 각 루프에서 N개씩 처리할 때다.
- 위의 예제는 바깥 루프가 N번 실행되는 동안 안쪽 루프가 상수인 5번 실행된다.
- 결국 알고리즘은 총 5N번 실행되지만 빅 오 표기법은 상수를 무시하니 O(N)이다.

# 7.6 1세기

```jsx
function countOnes(outerArray) {
  let count = 0;

  for (let innerArray of outerArray) {
    for (let number of innerArray) {
      if (number === 1) {
        count += 1;
      }
    }
  }

  return count;
}
```

- 앞선 예제처럼 중첩 루프가 있으니 O(N²)으로 결론 짓기 쉽다. 하지만 루프 두 개가 완전히 다른 배열을 순회한다.
- 바깥 루프는 안쪽 배열을 순회하고, 안쪽 배열은 실제 수를 순회한다. 결국에는 안쪽 루프가 총 수 개수만큼만 실행된다.
- 따라서 함수의 시간 복잡도는 O(N)

# 7.7 팰린드롬 검사기

팰린드롬(palindrome)은 앞으로 읽으나 뒤로 읽으나 똑같은 단어 혹은 구절

```jsx
function isPalindrome(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex < string.length / 2) {
    if (string[leftIndex] !== string[rightIndex]) {
      // O(1)
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}
```

- 예제에서 N은 함수에 전달된 string의 크기이다.
- 루프가 string 길이의 절반만큼만 실행되므로 N/2단계 실행, 알고리즘은 O(N)

# 7.8 모든 곱 구하기

```jsx
function twoNumberProducts(array) {
  let products = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      products.push(array[i] * array[j]);
    }
  }

  return products;
}
```

- 이 공식은 항상 N²/2 로 계산되므로 O(N²)

## 7.8.1 여러 데이터 세트 다루기

배열 한 개의 모든 두 수의 곱을 계산하는 대신, 한 배열의 모든 수와 다른 한 배열의 모든 수의 곱을 계산하면 어떻게 될까?

```jsx
function twoNumberProducts(array1, array2) {
  let products = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      products.push(array1[i] * array2[j]);
    }
  }

  return products;
}
```

이런 경우는 한 배열의 크기를 N, 다른 배열의 크기를 M으로 해서 시간 복잡도를 O(N × M)으로 표현하는 수 밖에 없다.

두 수가 다르면 더 작은 수(N보다 1만큼만 작더라도를 M에 할당해서 O(N)이 되고, 두 수가 같으면 O(N²)이 된다. 따라서 O(N × M)이 속하는 범위는 O(N)과 O(N²) 사이 정도로 이해할 수 있다.

# 7.9 암호 크래커

```jsx
function everyPassword(n) {
  let start = 'a'.repeat(n);
  let end = 'z'.repeat(n);

  let current = start;

  while (current <= end) {
    console.log(current);
    current = incrementString(current);
  }
}

function incrementString(str) {
  let chars = str.split('');

  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] !== 'z') {
      chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
      break;
    } else {
      chars[i] = 'a';
    }
  }

  return chars.join('');
}
```

- everyPassword 함수의 시간 복잡도: O($26^N$)
- imcrementString 함수의 시간 복잡도: O(N)
- 전체 시간 복잡도: O(N × $26^N$) ⇒ O($26^N$)
- 심지어 O(2^N)은 어떤 시점부터 O($N^3$) 보다 훨씬 느리다.
- 따라서 O($26^N$)은 N이 1씩 늘어날 때 마다 단계수가 26배씩 늘어난다. 그래서 브루트 포스로 암호를 해독하는 방법이 그토록 비효율적인 것.
