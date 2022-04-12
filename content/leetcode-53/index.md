---
emoji: ✏️
title: leetcode(53)- maximum sub-array[카데안 알고리즘]
date: '2022-04-12 00:00:00'
author: heesung jang
tags: leetcode, dp
categories: algorithm
---

[문제:Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

브루트포스로 O(n^2)을 풀이가 가능한 문제이지만 최대 부분 합을 구하는 유명한 카데인 Kadane's 알고리즘 풀이가 있다. O(n)에 풀이가 가능하다.

#### 카데인 알고리즘이란?

[ 1, -3, -1, 2] 와 같은 수의 나열 "수열"이 주어졌을 때 각 수들을 더했을때 가장 큰 합을 가지는 연속적인 서브 배열을 찾는 알고리즘이다.

카데인 알고리즘은 "이미 구했던 값은 다시 재사용"하는 접근법을 이용하며, Brute Force의 A[0]~A[N-1]의 접근 방법이 아닌 A[N-1]~A[0] 접근 아이디어를 사용한다.

![](https://velog.velcdn.com/images/heesungj7/post/3f2f1778-4683-4eda-a147-7ddb622b3d7e/image.png)

위 그림을 보면 A[5]의 curr_max 구하려면, A[4]의 curr_max + A[5]를 해주면 되는걸 확인할 수 있다.

> 각 A[4] Sum 배열 값에 A[5]를 더해주면 A[5] Sum에 대한 값들이 나온다.

이러한 방법은 A[5]의 모든 부분 합을 처음부터 다시 계산하지 않더라고 A[5]에 부분 합을 구할 수 있음을 뜻한다.

```
curr_max[i] = max(A[i] + curr_max[i-1], A[i])
```

- 위 공식은 부분 집합의 최대 합을 구하는 목적이기 때문에,
- A[i]+curr_max[i-1]과 A[i] 중 무엇이 더 큰지 비교합니다. (A[i]가 더 크다면 이 전에 구했던 부분 집합은 필요 없기 때문)
- 이렇게 구한 curr_max 배열에서 가장 큰 값을 구하면 Maximum Subarray Problem의 최대 부분 배열 합을 구할 수 있다.

```python
def max_sub_array(nums: List[int]) -> int:
    curr_sum = 0
    max_sum = nums[0]

    for num in nums:
        curr_sum = max(num, curr_sum + num)
        max_sum = max(curr_sum, max_sum)

    return max_sum
```
