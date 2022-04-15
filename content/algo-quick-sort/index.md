---
emoji: ✏️
title: Algorithm[퀵 정렬]
date: '2022-04-15 00:00:00'
author: heesung jang
tags: 알고리즘 quicksort
categories: algorithm
---

퀵 정렬은 병합 정렬과 마찬가지로 분할 정복 알고리즘이다. 병합 정렬과 다른점은 항상 배열의 중앙을 기준을 분활 정복을 하는것이 아닌 **pivot(피벗)**이라는 기준을 만들고 피벗보다 작으면 왼쪽, 크면 오른쪽과 같은 방식으로 **partitioning(파티셔닝)** 하면서 쪼개 나간다.

![](https://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif)

피벗을 정하는 기준과 방법이 여럿 있지만 N.로무토가 구현한 파티션 계획에서 소개된 방법으로 **항상 맨 오른쪽의 피벗**을 택하는 단순한 방식이 가장 간결하고 이해하기 쉽다.

```python
def quick_sort(nums: List[int], low: int, high: int):
    if low < high:
    	# 파티션 함수
        pivot = partition(low, high)

        quick_sort(nums, low, pivot - 1)
        quick_sort(nums, pivot + 1, high)
```

퀵 정렬의 메인 함수는 간단하다. 파티션 함수로 배열을 pivot 기준으로 나누고 재귀 호출하는 전형적인 분할 정복 구조이다.

```python
def quick_sort(nums: List[int], low: int, high: int):
    # 파티션 함수
    def partition(low: int, high: int) -> int:
        # pivot 설정 - 오른쪽 끝 마지막 인덱스 선택 (로무토 파티션 계획)
        pivot = nums[high]
        left = low
        for right in range(low, high):
            if nums[right] < pivot:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1

        nums[left], nums[high] = nums[high], nums[left]

        return left

    if low < high:
        pivot = partition(low, high)

        quick_sort(nums, low, pivot - 1)
        quick_sort(nums, pivot + 1, high)
```

파티션 함수를 로무토 파티션 계획 방법으로 구현하면 위 코드와 같다. 맨 오른쪽 피벗으로 정하고, 피벗을 기준으로 정렬과 상관없이 단순히 피벗보다 작은 수와, 큰 수들로 배열을 나눈다.

for문으로 파티션 함수에 들어온 배열을 순회하면서 right 포인터 값이 피벗보다 작다면 left 포인터 값과 스왑하는 형태이다. 이 부분은 코드나 설명을 읽기보다 아래와 같이 직접 포인터를 이동시켜보면 보다 쉽게 이해가 가능하다.

![](https://velog.velcdn.com/images/heesungj7/post/8949c50b-8955-4e5e-8573-af3a9c0d54d5/image.jpeg)

그림에서 보듯이 오른쪽 right 포인터가 이동하면서 피벗의 값이 오른쪽 값보다 더 클 때, 왼쪽과 오른쪽의 스왑이 진행된다. 스왑 이후에는 왼쪽 left 포인터가 함께 이동 한다.

퀵 정렬의 평균 시간 복잡도는 O(n log n)으 빠르다. 하지만 최악의 경우, 예들들어 이미 정렬된 배열이 입력값으로 들어온다면 O(n^2)이 된다. 항상 일정한 성능을 보이는 병합 정렬과 달리, 퀵 정렬은 이처럼 입력값에 따라 성능 편차가 심한 편이다.
