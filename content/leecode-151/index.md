---
emoji: ✏️
title: leetcode(151)- Reverse Words in a String
date: '2021-03-22 00:00:00'
author: heesung jang
tags: leetcode, 문장 뒤집기
categories: algorithm
---

문제: [leetcode - 151](https://leetcode.com/problems/fibonacci-number/) (Reverse Words in a String)

🎉 기분이 좋은 밤이다. 블로그에 현재까지 정리한 문제풀이는 지금 작성하고 있는 리트코드 151번 문제를 포함해서 3개밖에 되지 않지만 벌써 3주째 하루에 한 문제씩 알고리즘 문제를 풀고있다. 아직까지 Hard level의 문제는 시도조차 하지 않고 있고 easy 또는 Medium level의 문제 위주로 풀고있다.

### 1️⃣ 문제풀이1:

```python
def reverse_words(s: str) -> str:
    words = []
    temp_string = ""

    for char in s.strip():
        if len(temp_string) == 0 and char == " ":
            continue

        if char != " ":
            temp_string += char
            continue
        else:
            words.append(temp_string)
            temp_string = ""
            continue
    words.append(temp_string)
    words.reverse()

    return (" ".join(words))
```

1. 파이썬의 내장함수인 strip() 사용해서 좌우 여백을 제거한다..
2. 여백이 제거된 문자열을 반복문으로 이동하면서 공백이 나오기전까지 모든 문자들을 temp_string에 임시로 저장한다.
3. 공백이 나오면 새로운 단어가 시작되는 구간이기 때문에 현재 temp_string에 저장된 문자열을 words에 추가하고 temp_string을 다시 초기화 해준다.
4. 마지막 단어 다음에는 공백이 존재하지 않기 때문에 반복문이 끝나면 temp_string에 저장된 마지막 문자열을 words에 추가한다.
5. words 배열을 reverse()와 join() 내장함수로 재정렬해서 최종 리턴 값을 반환한다.

시간 복잡도: 문자열의 길이 n만큼 한번의 iteration을 하기 때문에 O(n)의 시간 복잡도를 가진다.

공간 복잡도: O(n)의 공간 복잡도를 가진다.

### 2️⃣ 문제풀이2:

leetcode에 올라온 풀이중 갈끔한 풀이가있어 하나 가져왔다.

```python
def reverseWords(self, s):
	words = s.strip().split(" ")
	words.reverse()
	words = [item for item in words if item != ""]
	return " ".join(words)
```

**리스트 컴프리헨션(list comprehension)**을 활용한 풀이로 상당히 깔끔하다.

```toc

```
