---
emoji: ✏️
title: leetcode(739)- Daily temperatures
date: '2022-04-19 00:00:00'
author: heesung jang
tags: leetcode, dfs
categories: algorithm
---

문제: [leetcode-739]("https://leetcode.com/problems/daily-temperatures/")(Daily temperatures)

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

```python
Input: temperatures = [73,74,75,71,69,72,76,73]

>>Output: [1,1,4,2,1,1,0,0]
```

매일의 온도를 리스트 T로 입력받은 뒤 현재보다 더 따뜻한 날이 올 때까지 며칠이 걸리는지를 구하는 문제다.

1. enumerate를 이용해서 특정 날짜의 인덱스와 온도값을 기억한다

2. T의 인덱스를 계속해서 스택에 쌓아두면서

   1. 현재 온도가 스택에 쌓아둔 마지막 날의 온도보다 높다면

   2. 스택을 pop해주고

   3. 정답에 i와 pop한 인덱스와의 차이를 저장한다

![](https://velog.velcdn.com/images/heesungj7/post/835229d3-cca8-4ed2-adea-f02e1ab27fb1/image.jpeg)

```python
def daily_temp(T):
    res, stack = [0] * len(T), []

    for i, curr in enumerate(T):

        while stack and curr > T[stack[-1]]:
            last = stack.pop()
            res[last] = i - last
        stack.append(i)

    return res
```
