---
emoji: ✏️
title: leetcode(88)- Merge sorted array
date: '2022-03-23 00:00:00'
author: heesung jang
tags: leetcode, 리스트병합
categories: algorithm
---

문제: [leetcode - 88](https://leetcode.com/problems/merge-sorted-array/submissions/) (Merge sorted array)

오름차순으로 정렬된 정수들로 이루어진 2개의 배열 nums1과 nums2가 입력값으로 주어진다. 그냥보면 병합정렬 문제이다. 특이한점이 있다면 return 값으로 병합된 배열을 반환하지 않고 초기에 주어진 nums1에 직접 병합을 해야한다.

예시:

![](https://images.velog.io/images/heesungj7/post/c6e18f9b-d91f-432b-a995-04f0203f050d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.44.45.png)

### 1️⃣ 문제해설 1:

처음에 지문을 읽고는 뭐지..?라는 생각이 들었다. 첫번째로 nums1을 보면 정렬된 정수들뒤로 nums2의 길이만큼 0으로 공간이 초기화되어 있고 배열 내 병합할 원소의 개수를 의미하는 m, n이 주어진다. 결론부터 말하면 sorting 없이 포인터를 지정해서 배열의 병합이 가능하다. 해당 문제풀이는 discussion에서 다른 사람의 코드를 가져왔다. 문제해설2에서 다루겠다.

```python
def merge(self, nums1, m, nums2, n):
    for num in nums2:
        nums1[m] = num
        m += 1

    nums1.sort()
```

1. 정렬을 신경쓰지 않고, nums2에 있는 모든 요소들을 nums1에 넣어준다.
2. list.sort()로 오름차 정렬을 시켜준다.

시간 복잡도: 파이썬의 sort() 함수가 O(n log n)의 연산 시간이 걸리므로 최종적으로 O(n log n)의 시간 복잡도를 가지는 풀이이다.

### 2️⃣ 문제해설 2:

위에서 언급했듯이 sorting이 필요없는 포인터를 이용한 풀이이다. nums1을 길이만큼 한번의 iteration을 실행하므로 O(n)의 시간 복잡도를 가진다.

```python
def merge(nums1, m, nums2, n):
    last = m + n - 1

    # merge in reverse order
    # nums2 elements to the end of nums1
    while m > 0 and n > 0:
        if nums1[m - 1] < nums2[n - 1]:
            nums1[last] = nums2[n - 1]
            n -= 1
        else:
            nums1[last] = nums1[m - 1]
            m -= 1
        last -= 1

    # fill nums1 with leftover nums2 elements at the beginning
    # this is because elements leftover in nums2 are smaller than any values in nums1
    while n > 0:
        nums1[last] = nums2[n - 1]
        n -= 1
        last -= 1

```

1. 아래 그림과 같이 nums1에 마지막 인덱스, m과 n의 인덱스에 각각 포인터를 위치 시킨다.

![](https://images.velog.io/images/heesungj7/post/14d190d5-1aed-45d7-8716-278f0e4b3e36/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.54.34.png)

2. m또는 n의 길이가 0이되기 전까지 즉, nums1과 nums2의 오른쪽 끝에서 왼쪽 끝으로 이동하면서 nums2의 값과 nums1의 값을 비교한다.
3. 만약 nums1[m] < nums2[n]이라면 n의 마지막 요소는 nums1과 nums2의 모든 요소들중 가장 큰 정수일것이다(nums1과 nums2 모두 오름차도 정렬이 되어있음에).
4. 이제 nums2의 마지막 인덱스 값, 예제에서는 6의 nums1 배열의 끝에 넣어준다.
   ![](https://images.velog.io/images/heesungj7/post/88cd2a67-8338-49d5-a13b-73931f5fae73/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.04.14.png)
   ![](https://images.velog.io/images/heesungj7/post/89b9efa8-5c4f-4b36-84de-4b172c454cbe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.06.02.png)

5. 만약 nums1[m]이 > nums2[n]라면 nums1[m]을 last 포인터 위치에 대입하고 m과 last의 포인터만 이동시킨다.

![](https://images.velog.io/images/heesungj7/post/8a04d0ae-94b3-4e81-9abe-8c1d03095c9e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-22%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.09.23.png)

포인터의 이동을 파워 포인터로 그려고보려 했지만...깔끔에가 못그리겠다. 혹시나 미래에 이 풀이를 다시 찾아보는 나이거나 지나가다 풀이를 보려고 들어오신 분이라면 아래 유튜브 링크를 참조해주세요.

👉 [유튜브 링크](https://www.youtube.com/watch?v=C4oBXLr3zos&t=195s)

```toc

```
