---
emoji: ✏️
title: leetcode(704)- Binary search
date: '2022-03-26 00:00:00'
author: heesung jang
tags: 이진탐색, leetcode
categories: algorithm
---

문제: [leetcode - 704](https://leetcode.com/problems/binary-search/) (Binary Search)

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

기본적인 이진탐색 문제이다.

1. 정렬된 배열에 중간 값을 찾아서 찾고자 하는 값(target)과 비교한다.
2. 중간 값보다 검색 값이 크다면 중간값 기준 배열의 오른쪽 구간을 대상으로 탐색한다. (mid < key)
3. 중간 값보다 검색 값이 작다면 중간값 기준 배열의 왼쪽 구간을 대상으로 탐색한다. (mid > key)

### 1️⃣ 문제풀이1(반복문):

```python
class Solution(object):
    def search(self, nums, target):
         low = 0
         high = len(nums) - 1

         while low <= high:
             mid = (low + high) // 2

             if nums[mid] == target:
                 return mid
             elif target < nums[mid]:
                 high = mid - 1
             elif target > nums[mid]:
                 low = mid + 1
         return -1
```

### 2️⃣ 문제풀이2(재귀)):

```python
class Solution(object):
    def search(self, nums, target):
        return self.binary_search(target, nums, 0, len(nums)-1)



    def binary_search(self,target, nums, left, right):
        if left > right:
            return - 1
        mid = (left + right) // 2

        if target == nums[mid]:
            return mid
        elif target < nums[mid]:
            return self.binary_search(target, nums, left, mid - 1)
        elif target > nums[mid]:
            return self.binary_search(target, nums, mid + 1, right)

```

```toc

```
