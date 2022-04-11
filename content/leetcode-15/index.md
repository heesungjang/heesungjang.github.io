---
emoji: ✏️
title: leetcode(15) - 3 sum
date: '2022-04-11 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [leetcode - 15](https://leetcode.com/problems/3sum/) (3sum)

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

배열을 입력받아 합으로 0을 만들 수 있는 3개의 배열 원소를 찾아 반환하는 문제이다.

```
예시:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
```

3개의 원소를 찾아야 하고 브루트 포스로 방식으로 풀이했을 경우 시간 복잡도가 O(n^3)로 당연히 시간 초과가 날 것이다.

[two sum](https://leetcode.com/problems/two-sum/) 또는 [two sum2](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)에 사용했던 투 포인터 기법을 응용하면 이 문제도 나름 쉽게 풀이가 가능하다.

n개의 숫자리스트가 주어졌을 때 세 수의 합이 0이 되는 세 수를 구해야 한다.

1. 투 포인터 기법을 사용할 것이기 때문에 입력 받은 배열을 오름차 순으로 정렬한다.

2. 반복문의 인덱스를 i로 두었을 때, i+1 즉, i를 재외한 나머지 배열의 첫번째 인덱스에 포인터를 하나 위치하고 len(n)-1인 배열의 마지막 인덱스 위치에 포인터를 하나 위치한다. 그림으로 보면 이해가 쉽다.
   ![](https://velog.velcdn.com/images/heesungj7/post/2019a970-8bea-424b-9106-05a70de4e5b3/image.jpeg)

```python
def three_sum(nums: List[int]) -> List[List[int]]:
	# 포인터 기법을 사용하기 위해서 배열을 먼저 정렬 한다.
    nums.sort()

	# 찾은 pair들을 sums에 저장하기 위해 배열을 하나 초기화 해준다.
    sums = []

	# 반복문을 설정한다. 최소 3개의 원소가 필요하기 때문에 반복문의 길이는 len()-2로 설정한다.
    for i in range(len(nums) - 2):
        # i가 0보다 큰데 즉, 두번째 index 부터 이전에 같은 값이 이미 나온 중복 값인지 체크를 한다.
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        else:
        	# 3. 왼쪽 포인터를 left, 오른쪽 포인터를 right로 설정한다.
			# left은 i보다 한 칸 오른쪽에 있고, right은 가장 마지막 칸에 있다 (위 그림 참조).
            left = i + 1
            right = len(nums) - 1

            # left가 right보다 커질 때까지 세 수의 합이 0이 되는 케이스를 찾는다
            while left < right:
                curr_sum = nums[i] + nums[left] + nums[right]
                if curr_sum == 0:
                    sums.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    # 세 수의 합이 0이 되는 경우 answer에 추가해준다.
                    # 중복된 숫자가 존재하면 두 번 탐색하지 않도록 포인터를 한 칸 더 이동시킨다
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                elif curr_sum < 0:
                    left += 1
                elif curr_sum > 0:
                    right -= 1

    return sums

```
