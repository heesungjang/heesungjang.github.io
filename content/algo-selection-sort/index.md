---
emoji: ✏️
title: Algorithm[선택 정렬]
date: '2022-03-29 00:00:00'
author: heesung jang
tags: algorithm
categories: algorithm
---

### 👉 선택 정렬 구현하기

♻️ 반복하는 과정:

1. 주어진 범위에서 _**최소 값의 위치를 찾는다.**_
2. 최소 값을 해당 **_범위의 가장 앞 숫자와 자리를 바꾼다._**
3. 이후, 해당 범위의 가장 앞 자리를 제외한 나머지 범위에 대해 위의 **_과정을 반복한다._**

입력으로 주어진 원본 배열 A와 이를 오름차순으로 정렬한 배열 B가 있다고 하자. 원소의 순서가 다를 뿐 두 배열은 집합적으로는 같은 집합이다.

![](https://media.vlpt.us/images/heesungj7/post/989d375d-da3d-48f3-9658-952774dada11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-04-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.12.54.png)

즉, 특정 인덱스 k에 대하여 배열 B의 원소 b[k]는 오름차순으로 (k+1)번째로 작은 값 이다.

![](https://media.vlpt.us/images/heesungj7/post/bc96f8ab-5883-4318-b09d-e18bd4b2f1e5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-04-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.17.07.png)

위에 정렬 과정은 아래와 같이 집합으로 표현이 가능하다.

> 𝑏0=𝑀𝑖𝑛𝐴 =𝑀𝑖𝑛(𝐵)
> 𝑏1 =𝑀𝑖𝑛 𝐴−{𝑏0} =𝑀𝑖𝑛(𝐵−{𝑏0})
> 𝑏2 =𝑀𝑖𝑛 𝐴−{𝑏0,𝑏1} =𝑀𝑖𝑛(𝐵−{𝑏0,𝑏1})

1. b0의 값은 배열 A에서 가장 작은 값이된다.
2. b1의 값은 b0을 뺀 배열 A에서 가장 작은 값이된다.
   .....

이렇게 작은 숫자부터 차례로 나열하면, 오름차순으로 배열이 정렬된다.

### 예제 코드:

```python
def selection_sort(data: List[int]) -> List[int]:
    n = len(data)

    for i in range(n):
        min = i
        for j in range(i, n):
            if data[j] < data[min]:
                data[i], data[j] = data[j], data[i]
    return data
```

```toc

```
