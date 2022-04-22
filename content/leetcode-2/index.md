---
emoji: ✏️
title: leetcode(2) - add-two-number
date: '2022-04-18 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [add-two-numbers](https://leetcode.com/problems/add-two-numbers/)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

미디엄 문제이기는 하지만 풀이가 어렵지는 않은 문제다.

두개의 정수가 역순으로 연결리스트로 주어진다. 역순으로 주어지기 때문에 덧셈 로직을 구현하기 쉽다. 연결 리스트에 역순으로 값이 들어있기 때문에 첫 head 노트부터 덧셈을 하면 우리가 두 수를 더할 때 일의 자리부터 더해서 자릿수를 올리며 더하는 방법과 동일하다.

### 풀이:

리스트를 순서대로 타고 가면 일의 자리부터 접근할 수 있다. 따라서, 두 리스트를 단순하게 앞에서부터 접근하면서 더해주는 식으로 새로운 연결 리스트를 만들어주면 두 정수의 합을 표현한 역순 열결 리스트를 만들 수 있다.

❗️중간에 올림 처리와 자릿수가 맞지 않을때, 예를들어 2342 + 387 일 때 비어있는 자리를 0으로 예외 처리만 해주면 쉽게 풀 수 있다.

```python
def addTwoNumbers(self, l1, l2):
  dummy = ListNode()
  curr = dummy

  carry = 0

  while l1 or l2 or carry:
      v1 = l1.val if l1 else 0
      v2 = l2.val if l2 else 0

      val = v1 + v2 + carry

      carry = val // 10
      val  = val % 10

      curr.next = ListNode(val)

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None
      curr = curr.next

  return dummy.next
```
