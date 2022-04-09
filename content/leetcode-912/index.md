---
emoji: ✏️
title: Algorithm[병합정렬]-[leet code 191]
date: '2022-04-09 00:00:00'
author: heesung jang
tags: leetcode, merge sort
categories: algorithm
---

### 1️⃣ 병합 정렬 (merge sort)

> 병합 정렬은 대표적인 분할 정복(Divide and Conquer) 알고리즘이다.

최선과 최악 모두 **O(n log n)**의 시간 복잡도를 가지는 알고리즘으로 대부분의 경우 퀵 정렬보다는 느리지만 일정한 실행 속도와 안정 **정렬(stable sort)**이기 때문에 여전히 상용 라이브러리에 많이 쓰이고 있다.

![](https://velog.velcdn.com/images/heesungj7/post/a251637b-c6a5-48c4-92bb-4b2b2a9abc1f/image.png)

병합 정렬의 과정을 도식화한 표를 살펴보자. 분활 정복으로 일정하게 정렬이 이뤄지는 병합 정렬의 특징을 잘 파악할 수 있다.

➗ [38, 27, 43, 3, 9, 82, 10]인 입력값은 --> [38, 27, 43, 3]과 [9, 82, 10]로 두 부분으로 분활, --> 다시 [38, 27], [43, 3], [9, 82], [10] 네부분으로 분활 등의 방식으로 각가 더 이상 쪼갤 수 없을 때까지 계속해서 분활한 후, 분활이 끝나면 정렬하면서 정복해 나간다.

### 2️⃣ 예시 문제:

문제: [leetcode - 912](https://leetcode.com/problems/sort-an-array/) (sort array)

리트코드 912번 문제를 병합 정렬을 사용해서 풀어봤다.

Given an array of integers nums, sort the array in ascending order.

입력 값으로 주어지는 배여을 오름차순으로 정렬하여 반환하는 하면되는 간단한 문제이다. 하지만 시간 초과로 선택 정렬이나 버블 정렬 o(n^2)의 시간 복잡도가 걸리는 정렬 알고리즘으로는 풀 수 없다.

최대 입력 값의 크기가 **1 <= nums.length <= 5 \* 10^4**으로 가장 큰 경우에 n의 값이 5만이고 n^2의 알고리즘으로 풀었을 경우에 최악의 경우 25억개의 연산이 필요하다.

#### ❌ 선택 정렬 풀이:

```python
class Solution(object):
    def sortArray(self, nums):
        n = len(nums)

        for i in range(n):
            min = i

            for j in range(i, n):
                if nums[j] < nums[min]:
                    nums[j], nums[i] = nums[i], nums[j]
        return nums
```

#### ❌ 버블 정렬 풀이:

```python
class Solution(object):
    def sortArray(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(0, n - i - 1):
                if nums[j] > nums[j + 1]:
                    nums[j], nums[j + 1] = nums[j + 1], nums[j]

        return nums

```

#### ✅ 병합 정렬 풀이:

```python
class Solution:

    def sortArray(self, nums):

        n = len(nums)

        # 재귀 종료 조건
        if n <= 1:
            return nums
        else:
			# 분할 (재귀)
            mid = n // 2
            left = self.sortArray(nums[:mid])
            right = self.sortArray(nums[mid:])

            # 정복 (병합)
            return merge(left, right)


    def merge(self, left, right):
        merged = []

        while left and right:
            if left[0] < right[0]:
                merged.append(left.pop(0))
            else:
                merged.append(right.pop(0))

        merged.extend(left if left else right)

        return merged

```

```toc

```
