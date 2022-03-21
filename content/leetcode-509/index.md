---
emoji: ✏️
title: leetcode(509)- Fibonacci number
date: '2021-03-21 00:00:00'
author: heesung jang
tags: 재귀, 피보나치, leetcode
categories: algorithm
---

문제: [leetcode - 509](https://leetcode.com/problems/fibonacci-number/) (피보나치 수열)

일반적으로 F(n)로 표기하며 피보나치 숫자는 피보나치 수열 이라고 불리는 수열를 형성하며, 각 숫자는 0과 1에서 시작하는 앞의 두 숫자의 합이된다. 즉, 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 **F(n) = F(n-1) + F(n-2)** 가 적용되는 수 이다.

예시:

- F(2) = F(0) + F(1) = 0 + 1 = 1
- F(3) = F(1) + F(2) = 1 + 1 = 2
- F(4) = F(2) + F(3) = 1 + 2 = 3
- F(5) = F(3) + F(4) = 2 + 3 = 5

n=5일경우 피보나치 수열을 나열해보면 [0, 1, 1, 2, 4, 5] 형태로 나열된다.

사실 이 문제는 필요한 식을 제공하기 때문에 피보나치 수열을 알고있지 않더라도 풀이가 가능하다.

<hr/>

### 1️⃣ 문제풀이 1 (recursion)

피보나치 수열 문제는 재귀함수를 소개하는 입문 영상에서 많이 다뤄지는 대표적인 문제이다.

```python
def non_memo_fib(n: int) -> int:
    if n < 0:
        raise ValueError("n must be a positive integer")

    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return non_memo_fib(n - 1) + non_memo_fib(n - 2)
```

우선, 재귀적으로 문제를 풀기 위해서 재귀 종료 조건이 되는 베이스 케이스를 생각해보자.

2개의 베이스 케이스가 필요할 것이다. 첫번째로 nth 값이 0 인지, 다른 하나는 전달된 nth 번호가 1인지 여부이다. 피보나치 수열의 전제 조건이 **F(0) = 0, F(1) = 1일 때**, 1 이상의 n에 대하여 **F(n) = F(n-1) + F(n-2)** 가 성립되므로 n이 0일때 0을 리턴, n이 1이하일 때 1을 리턴하는 함수의 종료 지점(탈출 조건)이 생긴다.

그 이외에는 리턴 값으로 Fibonacci(n-1) + Fibonacci(n-2)를 갖는다. 재귀적으로 자기 자신을 호출하며 종료 지점에 이르기까지 콜 스택에 호출된 함수가 쌓이게되고 종료 지점에 이르러 다시 오는 방식으로 작동한다.

![](https://images.velog.io/images/heesungj7/post/5ee550c7-e37e-462e-89cc-89ffe6c88ae6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.04.58.png)

이 문제는 재귀 함수를 사용하면 쉽고 직관적으로 풀이가 가능하지만 효율성이 떨어지는 연산이다.

시간 복잡도를 살펴보자.

2번씩 트리의 높이 n만큼 반복하여 함수를 호출하기 때문에 해당 풀이는 O(n^2)의 시간 복잡도를 가지며 콜 스택에 n만큼의 호출 함수가 쌓이기 때문에 O(n)의 공간 복잡도를 가진다 (❗️실행이 완료된 함수는 콜 스택에서 제거되기 때문에 n만큼만 쌓인다). 즉, 자기 자신을 2번씩 재호출하게 되므로, 흡사 binary tree 같은 형태를 가지며 입력 값이 증가함에 따라 함수 호출 횟수를 기하급수적으로 증식시키게 된다.

![](https://images.velog.io/images/heesungj7/post/7ef1b34a-ff5f-46a4-b98f-c1f903c187a6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-21%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.15.34.png)

재귀함수의 호출을 보여주는 recursion tree를 보면 이미 한번 계산된 함수가 여러번 반복해서 호출되는 것을 확인 할 수 있다. n=4일때 fib(2)는 총 2번, fib(1)은 3번 fib(0)은 총 2번 호출된다. 만약 n의 값이 4가 아니라 40이라고 한다면 훨씬 더 많은 비효율적인 반복 함수 호출이 발생할 것이다.

이를 해결해주는 기법이 여러가지 존재하는데 memorization 기법으로 이미 연산이 끝난 함수의 반복 호출을 제거하면 O(n)의 시간 복잡도로 연산이 가능하다.

### 2️⃣ 문제풀이 2 (recursion with memorization)

```python
def memo_fib(n: int, memorization=None) -> int:
    if memorization is None:
        memorization = {0: 0, 1: 1}

    if n in memorization: << ⭐️
        return memorization[n]
    else:
        memorization[n] = memo_fib(n - 1, memorization) + memo_fib(n - 2, memorization)
        return memorization[n]
```

함수의 파라미터 값으로 memorization라는 파라미터가 하나 추가됬다. 이미 연산을 마친 함수와 해당 연산으로 나온 값을 저장하는 역할을 한다. ⭐️로 표시한 부분에서 호출된 함수의 연산 값이 저장소에 있는지 확인하고 이미 계산한값은 메모해둔곳에서 가져와서 (**상수 시간의 연산**) 사용한다. 메모를 위해서 O(n)만큼의 공간 복잡도를 추가해야 하지만, 이미 계산한 값을 또 재귀 호출로 계산할 필요가 없으므로 O(n) 의 시간복잡도 연산을 끝낼 수 있다.

### 3️⃣ 문제풀이 3 (iterative approach)

재귀 함수로 풀이한 문제는 당연히 반복문으로 치환이 가능하다. 사실 대부분의 경우 반복문이 효율적인 측면에서 재귀함수 보다 더 좋고 선언적 프로그래밍에 익숙하지 않다면 몇줄에 코드가 더 늘어나도 명령형 프로그래밍의 반복문 작성이 보다 직관적이다. 실제로 재귀 함수는 코드만 봐서는 해당 로직이 반복되는지 알기 어렵다. 반면 for문 또는 while문 같이 명령형 프로그래밍의 반복문은 "나 지금 반복하고 있다"를 코드를 읽으면 바로 알 수 있다.

```python
 def liter_fib(n: int) -> int:
    if n == 1 or n == 2:
        return 1

    last_two = [0, 1]
    counter = 2

    while counter <= n:
        next_fib = last_two[0] + last_two[1]
        last_two[0] = last_two[1]
        last_two[1] = next_fib
        counter += 1
    return last_two[1] if n > 1 else last_two[0]
```

위 코드는 last_two라는 배열에 n-2와 n-1만 저장한다.

last_two[0] = n - 2
last_two[1] = n - 1

입력 값 n만큼 while문을 돌면서 (n - 2) + (n -1)의 값을 계산하고 새로운 n-1과 n-2를 업데이트한다. 반복문이 끝나면 마지만 연산 값인 last_two[1]를 반환한다. nth 값을 구하기 위해서 n의 길이 만큼만 반복하면 되기 때문에 O(n)의 시간 복잡도를 가지고 last_two라는 배열에 현재 계산중인 n-1, n-2 두개의 값만 저장하고 있으면 되기 때문에 O(1)의 공간 복잡도를 가진다. 재귀 풀이에 비해 모든 측면에서 훨씬 효율적이다. 또한 개인적으로 해당 코드가 보다 직관적이고 이해하기 쉽다.

```toc

```
