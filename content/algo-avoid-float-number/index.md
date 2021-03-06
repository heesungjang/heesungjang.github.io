---
emoji: ✏️
title: Algorithm[실수 연산을 피하자]
date: '2022-04-01 00:00:00'
author: heesung jang
tags: algorithm
categories: algorithm
---

#### 파이썬에서 0.1 + 0.2의 값은 얼마일까? 🤔

0.3이 나올 것 같지만 실제 계산 값은 0.30000000000000004가이 나온다. 파이썬은 실수를 부동 소수점 방식으로 표현하기 때문에 실수를 정확히 표현하는 것이 가능하지 않다. 만약 두 실수가 같은지 판단할 때 다음과 같이 0.1 + 0.2와 0.3은 같지 않다고 나온다.

```python
0.1 + 0.2 == 0.3

> False
```

이렇게 실수를 근삿값으로 표현하면서 발생하는 문제를 부동소수점 반올림 **오차(rounding error)**가 발생하기 때문에 실수를 비교할 때는 연산한 값과 비교할 값의 차이를 구한 뒤 특정 오차 범위 안에서 같은지 확인해야 한다. 파이썬 3.5이상부터는 두 실수가 같은지 판단할 때 math.isclose 함수를 사용 할 수 있다.

```python
import math
math.isclose(0.1 + 0.2, 0.3)

> True
```

❗️ 알고리즘 문제를 풀 때도 실수를 비교하는 조건 연산이 있다면 실수 계산을 피할 수 있는지 고려해보는 것이 좋다.

#### 예시:

```python
def find_index(data, n):
	u = sum(data) / n
	x = 0

	for i in range(n):
		dx = abs(u-data[x]) # i까지의 원소들 중 평균과의 최소거리
		di = abs(u-data[i]) # 현재 원소와 평균과의 거리

		if di < dx:
			x = i

	return x
```

1. 위 예시는 데이터는 -100,000 이상 100,000 이하의 정수를도 이루어진 배열이 주어진다.
2. 데이터 배열의 모든 원소들의 평균 값과 가장 가까운 원소를 찾고 해당 원소의 인덱스를 반환하는 함수이다.
3. 이때 평균과의 거리와 가작 가까운 즉, 평균과의 거리가 작은 원소는 아래와 같이 구할 수 있다.

- 평균과의 거리 𝐷 = 𝑑𝑎𝑡𝑎[𝑖] − 𝜇 가 가장 작은 인덱스 𝑥 계산하기
  • 평균을 계산한 이후
  • 평균과 차이가 가장적은 i들 중 • 가장 작은(왼쪽에 있는) i

이때 **가능하다면 계산 과정에서 실수를 사용한 계산은 최소화하는 것이 좋다**. 부동 소수점 의 오차로 인해 예상치 못한 오동작이 생길 수 도 있습니다. 대부분의 비교식은 조금 변환하면 정수의 계산으로 바꿀 수 있다.

- 👉 **𝐷=𝑑𝑎𝑡𝑎[𝑖]−𝜇 라면**
  • 𝑛𝐷 = 𝑛×𝑑𝑎𝑡𝑎[𝑖]−𝑆 가 된다.S는 모든 원소의 합. 𝑖
  • n과 D모두 양수이므로 성립한다.
  • 모든 연산의 결과는 정수가 된다.

❗️ 대소관계를 비교하는 경우, 대소관계만 유지 된다면 식을 변형해도 된다.

> |𝑑𝑎𝑡𝑎[𝑖]− 𝜇 < 𝑑𝑎𝑡𝑎[𝑗]− 𝜇 ⟺ 𝑛×𝑑𝑎𝑡𝑎[𝑖]−𝑆 < 𝑛×𝑑𝑎𝑡𝑎[𝑗]−𝑆|

해당 계산을 기존 풀이에 적용하면 아래와 같이 비교 연산에 실수를 사용하지 않고 풀이가 가능하다.
항상, 실수 계산은 최소화한 후 최종계산에서만 실수로 변환하는게 좋다.

```python
def find_index(data, n):
	S = sum(data)
	x = 0

	for i in range(n):
		dx = abs(n*data[x] - S) # i까지의 원소들 중 평균과의 최소거리
		di = abs(n*data[i] - S) # 현재 원소와 평균과의 거리

		if di < dx:
			x = i
	return x
```

```toc

```
