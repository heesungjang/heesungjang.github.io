---
emoji: ✏️
title: leetcode(234)- Palindrome Linked List
date: '2022-04-15 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제:[Palindrome Linked List]("https://leetcode.com/problems/palindrome-linked-list/")

입력값으로 들어오는 연결리스트가 팬인 그럼 구조인지 확인하는 문제이다. 어렵지 않은 문제이고 두 번째 풀어보는 문제이지만 **slow/fast runner** 구현이 정확히 기억나지 않아 일단 deque로 풀고 "파이선 알고리즘 인터뷰"의 runner 풀이를 다시 공부했다.

deque를 이용한 문제 풀이는 간단하다. 연결 리스트를 순차적으로 deque에 넣고 popleft()와 pop() 연산을 반복하면서 양 끝에 값을 비교하면 된다.

```python
def isPalindrome(self, head):

    if not head:
        return True

    nums = collections.deque()
    while head:
        nums.append(head.val)
        head = head.next
    # [1, 2]
            # [1, 2]
    while len(nums) > 1:
        if nums.popleft() != nums.pop():
            return False

    return True
```

![](https://velog.velcdn.com/images/heesungj7/post/d6c6313c-4f7c-4dce-b8ec-9e52947f6449/image.jpeg)

**런너(runner)** 기법을 활용하면 해당 연결 리스트 속성을 이용해서 풀 수 있다.

위 그림처럼 slow와 fast 포인터를 시작 head에 위치 시키고 각각 한 칸, 두 칸씩 이동 시키면 빠른 런너가 끝에 다다들 때 느린 런너가 정확히 중간 지점에 도달하게 된다.

❗️이때 느린 런너는 연결 리스트를 이동하면서 지나온 노드들의 값으로 역순 연결 리스트를 생성한다.

이렇게 생성된 역순 연결 리스트는 만약 해당 연결 리스트가 팰린드롬이라면 앞으로 남은 연결 리스트들의 값과 같을 것이다.

```python
def isPalindrome(self, head):
    # 역순의 연결리스트를 만들 빈 노드가 필요하다
    rev = None
    # slow, fast 노드르 초기화한다.
    slow = fast = head

    while fast and fast.next:
        fast = fast.next.next
        # 슬로우는 역순을 만들면서 이동한다.
        rev, rev.next, slow = slow, rev, slow.next

    # fast가 남아있다면 링크드 리스트가 홀수이기 때문에 중앙 값에서 한 칸 이동해야한다.
    if fast:
        slow = slow.next

    while rev and rev.val == slow.val:
        slow, rev = slow.next, rev.next

    # 링크드 리스트가 팰린드롬이라면 rev와 slow 모두 None 값이다.
    return not rev
```

좀 더 자세히 살펴보면, 역순 열결 리스트는 현재 값을 slow로 교체하고 rev.next는 rev가 된다. 즉 앞에 계속 새로운 노드가 추가되는 형태가 된다. 결국 이 연결 리스트는 slow의 역순 연결 리스트가 된다.

주의해야 하는 부분이 있는데, 입력값이 홀수일 때와 짝수일 때 마지막 처리가 다르다. 홀수일 때 slow 런너가 한 칸 더 앞으로 이동하여 중앙의 값을 빗겨 나가야 한다.
