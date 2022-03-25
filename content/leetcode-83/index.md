---
emoji: ✏️
title: leetcode(83)- Remove Duplicates from Sorted List
date: '2022-03-25 00:00:00'
author: heesung jang
tags: 링크드리스트, leetcode
categories: algorithm
---

문제: [leetcode - 83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) (Remove Duplicates from Sorted List)

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

```python
cur = head
	while cur:
		while cur.next and cur.next.val == cur.val:
			cur.next = cur.next.next     # skip duplicated node
        cur = cur.next     # not duplicate of current node, move to next node
    return head
```

### 1️⃣ 문제풀이:

1. 정렬된 단일연결리스트를 순회하며 중복(동일값) 여부를 확인하여 제거한다.

2. 반복문과 포인터를 이용하여 LinkedList를 순회하면서 현재노드와 다음 노드의 값이 같은경우 현재노드의 다음노드를 다다음노드로 연결한다.

3. 중복이 발생하는 마지막 노드까지 이동하여 해당 노드의 next 노드 즉, 중복이 아닌 새롭게 시작되는 값을 가진 노드를 현재 head 다음 노드로 연결해준다.

4. 아닐 경우 포인터를 앞으로 한칸 이동시켜 head 노드를 이동시켜준다.

```toc

```
