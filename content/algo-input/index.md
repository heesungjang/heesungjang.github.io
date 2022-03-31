---
emoji: ✏️
title: 파이썬 입력 받기 tips
date: '2022-03-31 00:00:00'
author: heesung jang
tags: python
categories: DataStructure
---

### 👉 How to handle inputs

코딩 테스트 문제를 풀다보면 다양한 형태로 입력 값이 주어진다.

별거 아닌거 같지만 헷갈릴 때가 있다. 파이썬에서 입력 값을 다루는 방법을 하나 둘 모아보자.

#### 1️⃣ 한 줄에 공백으로 구분된 두 정수 또는 n개의 정수가 입력될 때.

> input: 3 8

```python
a, b = [int(w) for w in input().split()]
```

```toc

```
