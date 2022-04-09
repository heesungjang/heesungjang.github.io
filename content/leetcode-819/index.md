---
emoji: ✏️
title: leetcode(819)- Most Common Word
date: '2022-04-07 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [leetcode - 819](https://leetcode.com/problems/most-common-word/) (Most Common Word
)

코로나 격리중..뭐 할까 고민하다 항해에서 보내준 '파이썬 알고리즘 인터뷰' 완독을 목표로 시작한 리트코드 문제풀기, 아직까지는 문제들이 쉬워서 그런지 재밌다 😅.

이번 문제도 난이도가 높지않지만 파이썬 컴프리헨션과 Counter 클래스를 활용해 볼 수 있는 좋은 문제였다. 알고리즘 준비를 파이썬으로 하겠다고 마음먹고 파이썬 공부를 시작한지 얼마 지나지 않았지만 벌써 푹 빠져버렸다.

#### 문제 해설:

Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

```python
def most_common_word(paragraph: str, banned: List[str]) -> str:
    # replace := 문자열 치환후, 새로운 문자열 반환
    # 정규식을 쓰기 싫어서 아래와 같이 필터링 했다.
    for c in "!?',;.": paragraph = paragraph.replace(c, " ")

    # 리스트 컨프리헨션 정말 좋다.
    words = [word for word in paragraph.lower().split() if word not in banned]


    counter = collections.Counter(words)
	# Counter 클래스의 most_common() 함수는 튜플 리스트를 반환하기 때문에 주의하자.
    # counter.most_common(1) == [("most common word", #count)]
    return counter.most_common(1)[0][0]

```

```toc

```
