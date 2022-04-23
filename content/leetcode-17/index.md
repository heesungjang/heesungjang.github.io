---
emoji: ✏️
title: leetcode(17)- Letter Combinations of a Phone Number
date: '2022-04-23 00:00:00'
author: heesung jang
tags: leetcode, dfs, backtracking
categories: algorithm
---

문제:[leetcode-17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/)(Letter Combinations of a Phone Number)

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```python
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

2에서 9까지 숫자가 주어졌을 때 전화 번호로 조합 가능한 모든 문자를 출력하는 문제이다. 대표적인 백트래킹 문제이다.

코드가 짧고 문제를 이해하는데 크게 어려움이 없어서 구현도 쉬울것으로 예상했지만 여러가지 답안지를 보고 이해하는데도 오랜 시간이 걸렸다.

일단 문제 접근 방식은 아래와 같다.

![](https://velog.velcdn.com/images/heesungj7/post/849754c7-3dd8-47ea-a165-c78e56ff9e5b/image.png)

### 문제풀이:

1. 위 그림과 같이 dfs로 전체를 탐색한 후 끝까지 탐색이 완료되면 백트래킹 하는 방식이다.
2. 재귀 호출을 할 때 cur_str에 현재 탐색중인 문자열을 붙여주고 leaf 노드에 도달하면 global result에 값을 반환하고 백트래킹하는 방식이다.

```python
def letterCombinations(self, digits: str) -> List[str]:
        def dfs(index, path):
	        # 지금까지 붙여온 path 문자열의 길이와 digits의 길이가
            # 같다면 즉, 탐색이 끝났으면 결과에 추가시킨뒤에 내부 함수를 종료 시킨다.
            if len(path) == len(digits):
                result.append(path)
                return

            for i in range(index, len(digits)):
                for j in dic[digits[i]]:
                    dfs(i + 1, path + j)

        if not digits:
            return []

        dic = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
        result = []
        dfs(0, "")

        return result
```

i, j 및 dfs 함수를 순서대로 따라가면 이런식으로 백트래킹 됨을 알 수 있다.

```python
i : 0, j: a, dfs(1, a)
i : 1, j: d, dfs(2, ad)
['ad']
return

i : 1, j: e, dfs(2, ae)
['ad', 'ae']
return

i : 1, j: f, dfs(2, af)
['ad', 'ae', 'af']
return

i : 0, j: b, dfs(1, b)
i : 1, j: d, dfs(2, bd)
['ad', 'ae', 'af', 'bd']
return

i : 1, j: e, dfs(2, be)
['ad', 'ae', 'af', 'bd', 'be']
return

i : 1, j: f, dfs(2, bf)
['ad', 'ae', 'af', 'bd', 'be', 'bf']
return

i : 0, j: c, dfs(1, c)
i : 1, j: d, dfs(2, cd)
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd']
return

i : 1, j: e, dfs(2, ce)
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce']
return

i : 1, j: f, dfs(2, cf)
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
return

i : 1, j: d, dfs(2, d)
i : 1, j: e, dfs(2, e)
i : 1, j: f, dfs(2, f)
```

### 헷갈렸던 부분:

```
👉 맨 처음 i가 0일 때의 모든 재귀가 끝나고 i가 1일 때 즉,

1. 위 쪽 결과에서 맨밑 3줄에 해당하는 지점에서는 dfs가 호출되고
2. range(2, 2) 아래와 같이 for문의 범위에 해당하는 값이 없어서 아무것도 수행되지 않고 끝나게 된다.

i : 1, j: d, dfs(2, d)
i : 1, j: e, dfs(2, e)
i : 1, j: f, dfs(2, f)
```

코드만 보고는 첫번째 outer for문이 종료되고 i가 1일때 시작되는 탐색이 어떻게 진행되는지 이해하기 어려웠다. 결국 차근차근 코드를 써가면서 확인하면 위와같이 i가 1로 시작하는 범위에는 아무런 탐색없이 반복문이 종료된다.

⭐️ 생각을 해보면 어차피 첫번째로 입력된 번호(위 예제에서는 "2")의 문자들로 dfs 탐색을 하게되면 모든 조합이 나오고 두번째 번호(위 예제에서는 "3")으로 다시 탐색을 하게되면 결국 문자의 순서만 바뀐 duplicated 조합이 다시 만들어진다.

그렇다면 어차피 첫번째 번호의 문자들로만 dfs 탐색을 하기 때문에 아래와 같이 코드를 수정해봤다.

```python
def dfs(index, cur_str):
            # 종료 조건
            # 현재 조합한 letters가 입력된 번호와 길이가 같다면 더 이상 탐색 x
            if len(cur_str) == len(digits):
                result.append(cur_str)
                return

       ❗️❗️ letters = dic[digits[index]]

       ❗️❗️ for char in letters:
               dfs(index + 1, cur_str + char)


        # 입력된 번호가 없나면 빈 배열 출력
        if not digits:
            return []

        # number to letters maping
        dic = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl",
           "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}

        result = []

        # dfs 탐색 시작
        dfs(0, "")
        # dfs 탐색 종료

        return result
```

❗️❗️로 표시한 부분을 보면 일단 2중 for문이 사라져서 기존 답안 코드보다 지관적이고

```
i : 1, j: d, dfs(2, d)
i : 1, j: e, dfs(2, e)
i : 1, j: f, dfs(2, f)
```

위와 같은 필요 없는 연산또한 실행하지 않는다.

```toc

```
