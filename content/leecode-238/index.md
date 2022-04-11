---
emoji: ✏️
title: leetcode(238) - Product of Array Except Self
date: '2022-04-11 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [leetcode - 238](https://leetcode.com/problems/product-of-array-except-self/) (Product of Array Except Self)

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

이번 문제는 해설을 찾아보지 않았으면 풀이 방법을 생각해내지 못했을 것이다.

O(n)의 시간 복잡도 제약이 있기 때문에 브루트포스 방식으로는 풀이가 불가능하며 나눗셈 operator를 사용하지 않고 풀어야 하기 때문에 구해야하는 값은 간단하지만 문제 난이도는 높은 편인 것 같다.

👉 여러가지 풀이를 찾아보고 '파이썬 알고리즘 인터뷰' 해설도 참고했지만 [neetcode - 238](https://www.youtube.com/watch?v=bNvIQI2wAjk) 채널 해설이 자세하고 이해하기 쉬웠다.

해당 영상에서는 O(N) + O(N) + O(N)인 공간 복잡도 성능을 O(N) + O(N)로 개선하기 위해서 로직이 추가되는 부분이 있는데 결국 빅오 계산에서는 O(N)이기 때문에 해당 로직은 추가하지 않았다. 그 편이 코드도 간결하고 그래서 알고리즘을 이해하기 편했다.

#### 풀이 접근 방식

일단 접근법은 아래와 같다.

![](https://velog.velcdn.com/images/heesungj7/post/2e34c455-1a99-42bd-9588-7053d21929ea/image.jpeg)

👉 만약 1번 인덱스 즉, 배열에서 2가 위치한 자리에서 2를 제외한 나머지 값들의 곱은 **2를 기준으로 왼쪽에 있는 원소들과 오른쪽에 위치한 원소들의 곱이다**.

- 2를 기준으로 왼쪽에는 1이 있고
- 2를 기준으로 오른쪽에는 3, 4가 있다.

👉 이번에는 2번 인덱스 위치 즉, 배열에서 3을 제외한 나머지 값들의 합을 구해보자.

![](https://velog.velcdn.com/images/heesungj7/post/93566e35-27ae-4d2a-a47a-8457573a03ba/image.jpeg)

- 3을 기준으로 왼쪽에 1,2가 있고
- 3을 기준으로 오른쪽에 4가 있다.

> ⭐️

1. 왼쪽 원소들의 곱과 오른쪽 원소들의 곱을 구해
2. 두 값을 곱하면 특정 인덱스 위치에서 해당 값을 제외한 모든 원소들을 곱한 값이 나온다는 걸 알 수 있다.

![](https://velog.velcdn.com/images/heesungj7/post/22778f23-8f3a-4f87-b7a0-4a23ff3dfc98/image.jpeg)

#### 문제풀이:

```python
def product_except_self(nums: List[int]):
	# 나중에 left와 right을 곱한 값을 넣어줄 리스트를 초기화
    products = [1 for _ in range(len(nums))]
    # prefix = left = 인덱스 위치 전에 나오는 원소들의 곱
    prefix = [1 for _ in range(len(nums))]
    # suffix = right = 인덱스 위치 후에 나오는 원소들의 곱
    suffix = [1 for _ in range(len(nums))]

	# 반복문으로 각 인덱스마다 그 전 위치까지 모든 원소들의 곱을 구한다.
    curr_prefix_products = 1
    for i in range(len(prefix)):
        prefix[i] = curr_prefix_products
        curr_prefix_products *= nums[i]

	# 반복문으로 각 인덱스마다 해당 인덱스 위치 이후에 나오는 모든 원소들의 곱을 곱해서 구한다.
    curr_suffix_products = 1
    for i in reversed(range(len(suffix))):
        suffix[i] = curr_suffix_products
        curr_suffix_products *= nums[i]

	# prefix와 suffix를 곱한 값을 products에 넣어준다.
    for i in range(len(products)):
        products[i] = prefix[i] * suffix[i]

    return products

```

```toc

```
