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

Easy 문제는 그럭저럭 다른 사람이 작성한 해답을 보지 않고 풀이를 완성하는 횟수가 증가하고 있지만 Medium level의 문제만 나오면 아직까지 책이나 리트코드 disccusion에 다른 사람들이 작성한 풀이를 참고해서 해결하고 있다. 아니 오늘 저녁까지는 그랬다.

내가 느끼기에도 이번 문제는 Medium level이라고 하기에는 다른 문제들에 비해 쉬웠다. 그치만..!! 그치만 처음으로 답지 없이 미디엄 레벨 문제를 풀었다. 너무 기뻐서 호주 시간으로 새벽 1시가 넘었음에도 앉아서 블로그에 자축 글을 쓰고있다 😅. 다른 사람들이 보면 "뭐 이 쉬운문제 하나 풀었다고"라고 생각하겠지만 이제 막 알고리즘 문제 풀기를 이제 갓 시작한 나는 기뻐서 당장이라도 기숙사 밖으로 달려나가 뛰어다니고 싶다 😂.

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

#### 시간 복잡도:

문자열의 길이 n만큼 한번의 iteration을 하기 때문에 O(n)의 시간 복잡도를 가진다.

### 공간 복잡도:

O(n)의 공간 복잡도를 가진다.

### 2️⃣문제풀이2:

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
