---
emoji: ✏️
title: leetcode(316) - remove-duplicate-letters
date: '2022-04-19 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [remove duplicate letters]("https://leetcode.com/problems/remove-duplicate-letters/")

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

```python
Input: s = "bcabc"

>> Output: "abc"
```

코드 구현 자체는 어렵지 않지만, 문자열을 제거하고 순서에 맞게 나열하는 로직을 생각해 내는 건 쉽지 않아 보인다. 두고두고 충분히 습득될 때까지 여러 번 풀어봐야 할 문제이다.

입력값 문자열에서 중복된 문자를 제거하고 **"the smallest in lexicographical order"**으로 중복 제거된 문자열을 반환해야 한다.

#### Lexciographical order란?

lexicographical order에 대해 먼저 정확한 이해가 필요해 보인다.

- 단순히 사전식 정렬, 사전식 오름차순 정렬과는 다르다.
- ❗️문자 그대로 사전에서 가장 먼저 찾을 수 있는 순서를 말한다.
- 예들들어, bcabc에서 중복을 제거한 경우의 문자에는 아래와 같이 여러가지 조합이 있다.
  - bca
    - bac
    - cab
    - abc
- ❗️ 이 중 **사전에서 가장 먼저 찾을 수 있는 것**은 abc이다.

또 하나 주의해야 하는 부분은, 예제 입/출력에서 ebcabc가 입력값이라면 결과는 eabc가 되지만, ebcabce가 입력값이라면 결과는 abce가 된다.

- ❗️ 해당 문자열에서 한 번만 등장하는 문자는 위치를 변경할 수 없다.

### 스택을 이용한 풀이:

1. 스택에는 문자열에 속한 문자를 차례대로 쌓아 나가되, 다음과 같은 조건인 경우 해당 값을 pop한다.

- 현재 문자 char가 스택에 쌓여 있는 문자인 경우(이전 문자보다 앞선 문자인 경우)
- 뒤에 붙일 문자가 또 나올 문자인 경우

뒤에 붙일 문자가 또 나올 문자인지 알기 위해서 collections.Counter()를 이용한다. 이 모듈은 문자별 개수를 자동으로 카운팅해 dict형태로 저장한다.

- 문자열 s의 문자들을 차례로 돌면서 counter 값을 -1해주고
- stack에 이미 들어가 있는 문자가 있고
- 현재 검사중인 문자가 스택에 가장 위 문자보다 앞선 문자이며
- stack에 가장 위에 있는 문자가 이후에 다시 나올 문자라면
- stack에서 pop() 연산을 한다.

stack을 사용하기 때문에 스택 ADT에 정의된 연산만을 사용해 문제를 풀어준다. 파이썬 리스트를 스택으로 사용하기 때문에 이미 처리한 문자를 확인할때 in stack 으로 처리할 수 있지만 ADT에 정의된 연산만을 사용하기 위해서 seen이라는 set 자료구조를 별도로 만들어 사용한다.

```python
def remove_duplicate(s: str) -> str:
    counter = collections.Counter(s)
    stack = []
    seen = set()

    for char in s:
        if char in seen:
            # 이미 처리된 문자, 즉 스택에서 제가할 수 없는 문자라면
            # 스택에 넣지 않고 스킵
            continue

        # 중복 문자 제거 부분
        # 현재 문자열이 스택에 있는 문자보다 알파벳 순서로 작은데,
        # 현재 스택에 있는 문자가 뒤에 더 있어서 스택에서 제거가 가능하다면
        # 모두 제거
        while stack and char < stack[-1] and counter[stack[-1]] > 0:
            seen.remove(stack.pop())

        stack.append(char)
        seen.add(char)

    return "".join(stack)
```

```toc

```
