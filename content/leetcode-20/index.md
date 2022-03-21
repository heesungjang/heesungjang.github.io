---
emoji: ✏️
title: leetcode(20)- Valid parentheses
date: '2021-03-21 00:00:00'
author: heesung jang
tags: 스택, leetcode
categories: algorithm
---

문제: [leetcode -20](https://leetcode.com/problems/valid-parentheses/submissions/) (valid parentheses)

이번 문제의 난이도는 easy이고 스택을 이용하는 대표적인 문제이다. 문제 풀이를 위해서 스택의 구현이 직접 필요하지 않으며 python 리스트로 충분히 구현이 가능하다. pop() 연산만이 필요하기 때문에 데크를 이용한 풀이와 시간적으로 차이가 없다.

입력 값으로 괄호로 구성된 문자열이 주어진다. 주어진 문자열을 검사해서 모든 괄호들이 올바르게 닫혀 있는지 확인하여 bool 타입의 결과 값을 리턴 해줘야 한다. 여기서 올바르게 닫혀있는 괄호란 (){}이나 ({}) 같이 닫는 괄호가 나올 때 제일 최근에 있는 여는 괄호와 매칭된 형태이다.

✅ 올바르게 닫힌 괄호 예시:

- ()
- ({})
- {{([])}}

❌ 올바르게 닫히지 않은 예시:

- ((
- ((])
- ]]
- ({[)})

### 문제풀이:

이 문제의 풀이는 간단하다.

1. 첫번째로 주어진 문자열을 반복문으로 왼쪽에서부터 오른쪽으로 이동한다.
2. 열린 괄호가 나오면 스택에 넣는다.
3. 만약 닫힌 괄호가 나오면 현재 **stack의 top**, 즉 가장 최신에 들어온 열린 괄호와 비교하여 서로가 상응하는 쌍인지 확인하다.
4. 비교할때 pop() 연사을 실행하기 때문에 중간에 break없이 모든 ilteration이 끝났다면 최종적으로 stack은 비어있게 된다.

```python
def is_valid(s: str) -> bool:
    stack = []
    match = {"(": ")",
             "{": "}",
             "[": "]"}

    for char in s:
        if char in "({[":
            stack.append(char)
            continue
        else:
            if len(stack) == 0:
                return False

            if char == match[stack[-1]]:
                stack.pop()

            else:
                return False

    return len(stack) == 0
```

#### 시간 복잡도: 문자열의 길이만큼 반복문을 돌기 때문에 O(n)의 시간 복잡도를 가진다.

#### 공간 복잡도: 열린 문자를 Stack에 담기 때문에 O(n)의 공간 복잡도를 가진다.

```toc

```
