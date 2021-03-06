---
emoji: ✏️
title: Algorithm[sentinel-linear-search]
date: '2021-06-21 00:00:00'
author: heesung jang
tags: 알고리즘 보초법
categories: algorithm
---

## 보초법 (sentinel method)

여러가지 배열 검색 방법들중 선형검색은 배열의 처음부터 마지막 또는 찾고자 하는 데이터가 나올때까지 순차적으로 모든 데이터를 비교하는 방법이다.

#### 간단한 코드 예제

```python
def linear_search(l: List[int], value: int) -> int:
    i = 0
    while True:
        if i == len(l):
            return False
        if l[i] == value:
            return i
        i += 1
```

위 선형 검색은 루프가 반복할 때마다 2가지 종료 조건을 체크한다. 단순한 판단이지만 이 과정을 계속 반복하면 종류 조건을 검사하는 cost를 무시할 수 없다.

> 선형 검색의 종류 조건

1. i == len(l)가 성립하면 (실패)
2. a[i] == value가 성립하면 (성공)

이과정을 줄여주는 것이 **보초법(sentinel method)이다**.

![](https://images.velog.io/images/heesungj7/post/87ef5cba-992c-4b57-80f1-bbcde047fd11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.44.52.png)

- 검색하고자 하는 키값을 배열의 맨 끝에 넣어준다.
- 이때 저정하는 값을 **보초**라고 한다.
- 위 그림에서 볼 수 있듯이, 기존 데이터에 찾고자하는 키 값이 존재하지 않아도, 보초를 통해 검색할 값을 찾았나?라는 질문에 True를 반환하게된다.

- 이렇게 if 조건을 하나 단축할 수 있으며, return에서 찾은 데이터의 인덱스가 배열의 길이와 같은지 검사만 해주면 된다.

```toc

```
