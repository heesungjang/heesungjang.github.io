---
emoji: ✏️
title: Algorithm[버블정렬]
date: '2022-04-05 00:00:00'
author: heesung jang
tags: 알고리즘
categories: algorithm
---

### 🛁 버블 정렬 구현하기

버블 정렬은 기본적으로 O(N^2)의 시간 복잡도를 가지는 알고리즘이다. 실제 코딩 테스트에서 O(N^2) 알고리즘을 사용하거나 구현할 일은 없겠지만 기본적인 정렬 알고리즘들을 정리하고 개념을 익혀 놓는게 좋을 것 같다. 알고리즘 구현 자체는 크게 어려운 부분이 없다.

버블 정렬은 이름과 같이 물속에서 거품이 올라오는 모양과 비슷하다고 해서 버블 정렬이라고 한다.

배열을 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽 방향으로 이동하면서 이웃한 앞뒤 원소의 값을 비교하고 앞 원소의 값이 더 크다면 두 원소의 자리를 교환(swap)하는 작업을 반복한다.

![](https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/4af29665-03ce-48e7-0f63-406754231100/public)

### 알고리즘

데이터의 수를 N이라고 하자. 버블 정렬 알고리즘은 아래의 과정을 N번 반복할 것이다.

1. 배열의 0번 칸의 숫자가 1번칸의 숫자 보다 크다면 두 값의 위치를 교환한다.
2. 배열의 1번 칸의 숫자가 2번칸의 숫자 보다 크다면 두 값의 위치를 교환한다.
3. ...
4. 배열의 N-2번 칸의 숫자가 N-1 칸의 숫자 보다 크다면 두 값의 위치를 교환한다.

```python
def bubble_sort(data, n):
	for i in range(n):
		for j in range(0, n-i-1):
			if data[j] > data[j+1]:
				data[j], data[j+1] = data[j+1], data[j]
	return data
```

### 최적화

이전 반복문 실행에서 앞뒤 자리 비교(swap)이 한 번도 일어나지 않았다면 정렬되지 않는 값이 하나도 없었다고 간주할 수 있다. 따라서 이럴 경우, 이후 반복문을 수행하지 않고 바로 for문을 break으로 나가준다.![](https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/62805b8b-e105-4598-f109-0b87e0100900/public)

```python
def bubble_sort(data, n):
	for i in range(n):
		count = 0
		for j in range(0, n-i-1):
			if data[j] > data[j+1]:
				data[j], data[j+1] = data[j+1], data[j]
				count += 1
		if count == 0:
        	# data[0] ~ data[n-i-1]칸까지 오름차순이 아닌 쌍이 없었다.
            # data[0] ~ data[n-i-1]칸까지 모두 오름차순이다.
            # data[n-1] ~ data[n-1]까지는 이미 정렬되어있다.
			break
	return data
```

```toc

```
