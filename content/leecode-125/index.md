---
emoji: ✏️
title: leetcode(125)- valid palindrome
date: '2022-04-09 00:00:00'
author: heesung jang
tags: leetcode, palindrome
categories: algorithm
---

문제: [leetcode - 125](https://leetcode.com/problems/valid-palindrome/) (Valid Palindrome)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

입력으로 주어지는 문자열이 팰린드롬인지 확인하고 True 또는 False를 반환하는 문제이다. 여러가지 방식으로 풀이를 작성하고 제출한 결과 투 포인터를 사용한 풀이가 가장 빠르게 나왔다.

#### 1️⃣ 문제풀이(list):

가장 느림. pop(0)가 O(n)이라 결국 O(n^2)이기 때문에 아래 데크의 popleft()와 성능 차이가 크다.
![](https://velog.velcdn.com/images/heesungj7/post/51888ece-005f-407a-b389-2e8466ca4599/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-04-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.57.45.png)

```python
def isPalindrome(self, s):
        words = [char.lower() for char in list(s) if char.isalnum()]

        while len(words) > 1:
            if words.pop() != words.pop(0):
                return False

        return True
```

#### 2️⃣ 문제풀이(deque):

![](https://velog.velcdn.com/images/heesungj7/post/9db67569-5195-4340-b134-92fa9a884cdc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-04-09%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.57.17.png)

```python
    def isPalindrome(self, s):
        strs = collections.deque()
        for char in s:
            if char.isalnum():
                strs.append(char.lower())

        while len(strs) > 1:
            if strs.popleft() != strs.pop():
                return False
        return True
```

#### 3️⃣ 문제풀이(pythonic):

![업로드중..](blob:https://velog.io/88af9ff2-8b86-430b-804f-6ec5c9c6beee)

```python
   def isPalindrome(self, s):
        words = [char.lower() for char in list(s) if char.isalnum()]

        if words[::-1] == words:
            return True
        else:
            return

```

#### 4️⃣ 문제풀이(two-pointer):

```python
    def isPalindrome(self, s):
        words = [char.lower() for char in list(s) if char.isalnum()]

        left = 0
        right = len(words) - 1

        while left <= right:
            if words[left] == words[right]:
                left += 1
                right -= 1
            else:
                return False
        return True
```

```toc

```
