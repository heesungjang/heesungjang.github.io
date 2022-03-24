---
emoji: ✏️
title: algoexpert-non-constructible-value
date: '2021-03-24 00:00:00'
author: heesung jang
tags: leetcode, non-constructible
categories: algorithm
---

문제: Elements of Programming Interviews in python, page 189

> Given an array of positive integers (representing coins), find the smallest value that cannot be constructed from those integers.

0이아닌 정수들로 이루어진 배열이 주어진다. 이때 배열 요소들의 합으로 구할 수 없는 수들 중 가장 작은 수를 반환해야 한다.

### Exmaple

```python
Input: A = [1, 2, 4]
Output: 8
Explanation: 배열 A의 요소들로 조합 가능한 정수들은 1, 2, 3, 4, 5, 6, 7 이다.

즉, 배열의 A의 요소들로 만들 수 없는 가장 작은 값은 8이다.
```

### 1️⃣ 문제풀이:

```python
def non_constructible(nums: List[int]) -> int:
    # sort the list of coins
    # O(log n) time complexity

    curr_constructible = 0

    for num in sorted(nums):
        if coin > curr_constructible + 1:
            return curr_constructible + 1

        curr_constructible += num

    return curr_constructible + 1
```

1. 배열의 원소들을 오름차순으로 정렬하는것이 중요하다.
2. 오름차순으로 정렬된 정수들의 누적 합계를 구하면 특정 위치에서 구성 가능한 가장 높은 값을 알 수 있다.
   👉 예들들면)

- sum of [1, 2 ] = **3** 이며 조합 가능한 수는 [1, 2, 3]이다.
- sum of [1, 2, 4] = **7** 이며 조합 가능한 수는 [1, 2, 3, 4, 5, 6, 7]이다.
- sum of [1, 2, 4, 5] = **12** 이며 조합 가능한 수는 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]이다.

- ❗️ 즉, 특정 인덱스 위치에서 다음에 나오는 정수가 curr_constructible(해당 인덱스까지 모든 정수들의 합) + 1 보다 크면 curr_constructible + 1을 생성할 수 없다.

시간복잡도: O(n log n) 정렬, O(logn) 탐색

공간복잡도: O(1)

```toc

```
