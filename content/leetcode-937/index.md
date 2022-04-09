---
emoji: ✏️
title: leetcode(937)- Reorder Data in Log Files
date: '2022-04-10 00:00:00'
author: heesung jang
tags: leetcode reorder
categories: algorithm
---

문제: [leetcode - 937](https://leetcode.com/problems/reorder-data-in-log-files/submissions/) (Reorder Data in Log Files)

You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

- Letter-logs: All words (except the identifier) consist of lowercase English - - letters.
- Digit-logs: All words (except the identifier) consist of digits.

Reorder these logs so that:

- The letter-logs come before all digit-logs.
- The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
- The digit-logs maintain their relative ordering.
  Return the final order of the logs.

#### 문제 해설:

배열의 원소들이 로그들을 주어진 조건에 따라 재정렬하는 문제이다.

1. 로그의 가장 앞 부분은 식별자이다.

- "digi1 8 1 5 1"에서 digi1이 로그의 특성 즉, 8151이 숫자 로그라는것을 알려주는 식별자이다. =

2. 문자로 구성된 로그가 숫자 로그보다 앞에오게 한다.

- ["let1 art can". "digi1 8 1 5 1"]이 주어졌을때 --> ["digi1 8 1 5 1", "let1 art can"]같이 문자 로그가 배열에 앞에 위치하게 재정렬한다.

3. 식별자는 순서에 영항을 끼치지 않지만, 문자가 동일할 경우에 식별자 순으로 재정렬한다.
4. 숫자 로그는 특별한 조건없이 입력 순으로 정렬한다.

```python
def reorder_log_files(logs):
    # 문자 로그와 숫자 로그를 담을 배열을 초기화
    letters, digits = [], []

	# 문자 로그와 숫자 로그를 나눈다.
    for log in logs:
        if log.split()[1].isdigit():
            # 숫자 로그 또한 문자열로 저장되어 있기에, isdigit으로 판별후 digits에 추가
            digits.append(log)
        else:
            # 문자 로그를 letters에 추가
            letters.append(log)

	# 이 시점에는 모든 문자 로그와 숫자 로그가 나누어져 있음.

    # 주어진 조건에 맞게 재정렬을 실행
    # 1. 로그의 컨텐츠로 먼저 정렬을 하고
    # 2. 같은 로그가 있다면 식별자로 한번 더 정렬한다.

    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    # 이 시점에는 모든 문자 로그들이 조건에 맞게 정렬되어 있음.
    # 문자 로그가 먼저 위치하기 때문에 letters에 digits를 확장해준다.=
    letters.extend(digits)

    return letters
```

```toc

```
