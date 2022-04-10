---
emoji: ✏️
title: leetcode(49) - Group Anagrams
date: '2022-04-10 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제: [leetcode - 49](https://leetcode.com/problems/group-anagrams/) (Group Anagrams)

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```python
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

> 아나그램이란?
> 일종의 언어유희로 문자를 재배열하여 다른 뜻을 가진 단어로 바꾸는 것을 말한다. 우리말에도 애너그램을 찾아 볼 수 있다. 예로는 "문적박대"를 "대박전문"으로 바꿔 부르는 단어 등을 들 수 있다.

입력 값으로 주어진 문자들을 정렬하여 비교하면 쉽게 풀이가 가능하다. 애너그램이라는 관계가 각은 알파벳들로 이루어저 있기 때문에 구성하고 있는 알파벳만 같다면 알파벳 구성 순서와는 상관없이 정렬후 같은 값을 갖게된다.

👉 예시로, "nat"과 "tan"은 애너그램이기 때문에 알파벳 순으로 정렬하면 **두 단어 모두 "ant"**가된다.

애너그램들은 결국 정렬후에 같은 값을 가지기 때문에 파이썬의 dictionary를 활용해서 정렬후 값을 키로 애너그램들을 그룹필 할 수 있다.

```python
def group_anagrams(strs: List[str]):
    # default dictionary 리스트 값으로 생성
    dic = collections.defaultdict(list)

    for word in strs:
        # 각 단어를 알파벳 순서로 정렬
        sorted_word = "".join(sorted(word))
        # 정렬된 단어를 키 값으로 애너그램을 그룹핑 한다.
        dic[sorted_word].append(word)
    print(dic)
    return list(dic.values())
```
