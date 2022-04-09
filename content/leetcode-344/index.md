---
emoji: ✏️
title: leetcode(344)- reverse string
date: '2022-04-08 00:00:00'
author: heesung jang
tags: dp, leetcode
categories: algorithm
---

문제: [leetcode - 344](https://leetcode.com/problems/reverse-string/) (Valid Palindrome)

주어지는 문자 배열을 리턴 없이 리스트 내부를 직접 조작하여 원소들을 뒤집는 문제이다.

pythonic하게 문제를 푼다면 아래와 같이 한줄로 풀이가 가능하다. 투 포인터 방식도 제출해서 시간을 비교해봤지만 크게 차이는 없다.

![](https://velog.velcdn.com/images/heesungj7/post/38f23d6c-ad95-4d91-bfaf-ecdbf6be9836/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-04-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.07.51.png)

#### 1️⃣ 문제풀이:

```python
def reverse_string(s: List[int]) -> List[int]:
    s.reverse()

    return s
```

#### 2️⃣ 문제풀이:

```python

def reverse_string(s: List[int]) -> List[int]:
    left = 0
    right = len(s) - 1

    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

    return s
```

```toc

```
