---
emoji: ✏️
title: leetcode(322)- Coin change
date: '2022-03-28 00:00:00'
author: heesung jang
tags: dp, leetcode
categories: algorithm
---

문제: [leetcode - 322](https://leetcode.com/problems/coin-change/submissions/) (Binary Search)

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

어느 파이썬 알고리즘 책에서는 해당 문제를 소개하면서 "거스름돈" 문제를 대표적인 그리디 알고리즘이라고 설명한다. 맞다. 그치만 반만 맞다. 그리디하게 해당 문제를 풀어보면 가장 큰 화폐 단위부터 거슬러 준다면 최적의(가장 적은 동전으로) 거스름돈을 찾을 수 있을 것 같다. leetcode에 같은 문제가 있어서 직접 풀어본 결과, 그리디하게 접근하면 해당 문제를 풀 수 없었다.

### 1️⃣ 문제풀이1(greedy):

```python
def coin_change(coins: List[int], amount: int) -> int:
    coins.sort(key=lambda x: x, reverse=True)

    count = 0

    for coin in coins:
        count += amount // coin
        amount %= coin

    return count
```

대부분에 경우 위에 그리디 문제풀이로 정답을 찾을 수 있다.

👉 Example 1: coins = [1,2,5], amount = 11

1. 주어진 코인 배열을 오름차순으로 정렬한다.
   - coins = [5, 2, 1]
2. 가장 큰 화폐부터 해당 화폐가 amount값에 몇번 들어가는지 구한다.
   - 11 = (5\*5)+1 --> 11 // 5 = 2
   - count = 2(5화폐 2개)
3. 남은 amount 값 작은 화폐로 채운다
   - 1 = (1\*1) --> 1 //1 = 1
   - count = 2(5화폐 2개) + 1(1화폐 1개)

##### BUT

#### BUT

### BUT

주어진 화폐들이 [9,6,5,1]인 경우를 생각해보자.
👉 Eample 2: coins=[9,6,5,1], amount=11.

1. 가장 큰 9를 빼면 11-9 = 2가 남는다.
2. 남은 2는 두개의 1로 거슬러줄 수 있다.

최종적으로 3개의 coin이 필요하다 ('9' 1개 + '1' 2개).

가장 적은 coin을 사용한 거스름돈이 맞나? 아니다 ❌.

이 상황에서 가정 적게 필요한 동전의 수는 2이다 (5 + 6 = 11).

### 2️⃣ 문제풀이2(dp):

여러 문제 풀이를 찾아봤다. '다이나믹 프로그래밍' 풀이가 가장 많았다. 코드 자체는 크게 어렵지 않았지만 해당 풀이을 도출하는 thought processing이 결코 쉽지않아 보인다.

다이나믹 프로그래밍으로 문제를 접근할때 아래와 순서로 접근할 수 있다:

1. recursive brute force solution
2. recursive solution with memo
3. recursive dynamic programming solution

「다이나믹 프로그래밍」에가 가장 중요한 키워드는 검색(search)과 기억(memo)이다. "검색" 문제에 대해서는 "재귀 트리" 분석을 먼저 그려야 한다. ([참고영상](https://www.youtube.com/watch?v=H9bfqozjoqs))

![](https://images.velog.io/images/heesungj7/post/43e6fbaa-e28e-4504-900f-369196af9c5c/KakaoTalk_Photo_2022-03-28-16-40-47.jpeg)

재귀 트리를 살펴보면 하이라이트로 처리한 부분처럼 반복적으로 발생하는 것을 알 수 있다. 이 반복되는 연산을 "momoizied search (메모화된 검색)" 또는 "dp table (dp 테이블)"로 처리한다.

```python
def coin_change_dp(coins: List[int], amount: int) -> int:
    # 0부터 amount까지 포함하는 배열 초기화
    dp = [float("inf") for amount in range(amount + 1)]

    # 0원의 만들기 위해서 필요한 코인은 0개
    dp[0] = 0

    for coin in coins:
        for amount in range(len(dp)):
            if coin <= amount:
                # if amount = 186
                # dp[amount] = 186  --> dp[186] --> 1
                # min(infinity, dp[186 - coin(186) --> 0 +1 = 1]
                dp[amount] = min(dp[amount], dp[amount - coin] + 1)

    return dp[amount] if dp[amount] != float("inf") else -1
```

1. 0부터 amount까지 최적의 solution(가장 적은 동전의 조합)을 추적하는 배열을 하나 생성한다.
2. 해당 배열을 원소들을 무한대로 초기화 한다.
3. amount = 0를 위해서 필요한 코인은 0개이다. dp[0]을 0으로 초기화 한다.
4. 주어진 coin마다 amout에 필요한 coin을 계산한다.
5. 해당 결과 값이 dp 테이블에 있는지 체크하고, 있다면 min 값을 저장한다.

dp 테이블을 사용하면서 흥미로운 점은 n(amount)에 대한 해답을 구하려고 할 때마다 n보다 작은 모든 값에 대한 해답을 이미 가지고 있다는 것이다.

```toc

```
