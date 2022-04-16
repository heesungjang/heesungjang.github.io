---
emoji: ✏️
title: leetcode(21)- Merge Two Sorted Lists
date: '2022-04-16 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [Merge Two Sorted Lists]("https://leetcode.com/problems/merge-two-sorted-lists/")

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

```python
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

문제 요약: 각각 정렬되어 있는 리스트 노드 2개를 합쳐서 1개의 정렬된 리스트 노드 출력한다.

유의 사항: 각 리스트 노드가 비어있을 수도 있다. 그러면 빈 리스트 노드를 출력한다.

찾아보면 재귀적으로 list1과 list2의 값을 비교 연산하고 스왑하는 풀이도 있지만 ("파이썬 알고리즘 인터뷰") 노드들이 스왑되는 과정이 직관적으로 와닿지 않는다.

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):

        # make dummy node to store merged data
        dummy = ListNode()
        # make reference named "tail" to add nodes
        tail = dummy

        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next

            # move tail to currently added node, to add further nodes to end
            tail = tail.next

        tail.next = l1 or l2


        # return dummy.next becuase dummy.next node is the head node for merged linked list
        return dummy.next
```

list1과 list2를 순차적으로 비교하면서 작은 노드순으로 dummy node에 추가하는 방식으로 풀었다.

![](https://velog.velcdn.com/images/heesungj7/post/14a8c81b-69d0-4fe6-a984-3093abe7930e/image.jpeg)

```python
def mergeTwoLists(self, l1, l2):
  # make dummy node to store merged data
  dummy = ListNode()
  # make reference named "tail" to add nodes
  tail = dummy

  while l1 and l2:
      if l1.val < l2.val:
          tail.next = l1
          l1 = l1.next
      else:
          tail.next = l2
          l2 = l2.next

      # move tail to currently added node, to add further nodes to end
      tail = tail.next

  tail.next = l1 or l2


  # return dummy.next becuase dummy.next node is the head node for merged linked list
  return dummy.next
```

1. l1과 l2를 비교하고 작은 값을 dummy에 추가한다.
2. 하나의 노드 포인터가 마지막 None까지 이동하면 while문을 빠져 나온다.
3. 남아있는 연결 리스트가 있다면 tail 끝에 추가해준다.
