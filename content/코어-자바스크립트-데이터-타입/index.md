---
emoji: ✏️
title: Javascript - 데이터 타입 (1)
date: '2022-05-01 00:00:00'
author: heesung jang
tags: core
categories: core
---

### 🚪들어가며

아래 코드의 출력 결과는 무엇일까?

![](https://velog.velcdn.com/images/heesungj7/post/327e7810-c3dc-456c-a076-97240fe57228/image.png)

자바스크립트 **primitive type(기본형)**과 **reference type(참조형)** 데이터 타입의 동작과 원리를 살펴보고 평소에 애매모호하게 알고 있던 개념을 확실히 잡아보자.

### 자바스크립트 데이터 타입 종류

자바스크립트 데이터 타입은 **기본형**과 **참조형** 크게 두가지가 있다.

| **기본형** | **참조형** |
| :--------: | :--------: |
|   number   |   object   |
|   string   |   array    |
|  boolean   |  function  |
|    null    |    date    |
|   symbol   |   RegExp   |

### Primitive type(기본형)

자바스크립트의 기본형 데이터 타입은 **불변성**을 뛴다는 것을 어디선가 듣거나 읽었을 것이다. 처음 이 개념을 공부할 때는 "불변"이 아니라 "불편"했다.

여기서 변하지 않는다는 것은 무엇을 의미할까?

아래 코드를 보면 분명 변수에 할당한 값은 이후에 다시 새로운 값으로 변경할 수 있다.

```javascript
let initialVariable = '1';

initialVariable = '2';

console.log(initialVariable); // "2"
```

리액트 코어 팀에 Dan abramov의 표현을 빌리자면 자바스크립트의 기본형 데이터 타입은 "하늘에 떠 있는 별"과 같다고 표한다. 컴퓨터 언어를 설명하면서 저런 표현이 가능하다니 멋있다.

> "They are a permanent part of our JavaScript universe. I can point to them, but I can’t create, destroy, or change them."

별과 같다니 무슨 뜻일까❓

자바스크립트가 기본형 데이터 타입을 메모리에 저장하는 과정을 개략적으로 살펴보면 마치 우리가 하늘에 떠 있는 별을 손가락으로 가리키는 건 가능하지만 직접 가서 만질 수 없는 것처럼 작동한다.

```javascript
let myName = 'heesung';
```

우리가 위와 같이 코드를 작성해도 자바스크립트는 아래와 같이 코드를 읽는다.

```javascript
let myName;

myName = 'heesung';
```

"변수에 값을 할당한다"라는 말을 익히 들어봤을 것이다. 위 동작 원리를 이해하려면 **변수**와 **변수명** 그리고 해당 변수에 할당하는 **값**의 차이를 알아야 한다.

프로그래밍에서는 **변수** "변할 수 있는 무언가"이며 무언가는 데이터가 된다. **변수명**은 어떤 특정 데이터를 식별하는 이름이다.

```javascript
let myName;
```

위 코드를 풀어쓰면 `let myName;`은 "메모리에 변경 가능한 데이터를 담을 공간을 확보하고 해당 공간의 찾을때 사용할 식별자로 myName 변수명(이름)을 사용한다"가 된다. 이제 이렇게 확보한 공간에 문자열을 담았다가 숫자를 담는 등의 다양한 명령을 내릴 수 있게 된다. 우리에 예시 코드에서는 해당 공간에 문자열 "heesung"을 담은 것이다.

### ⚙️ Under the hood

이를 바탕으로 컴퓨터가 우리의 명령을 받아 메모리 영역에서 어떤 작업을 수행하는지 살펴보자.

```javascript
let myName;
myName = 'heesung';
```

![](https://velog.velcdn.com/images/heesungj7/post/d557a81a-f386-4736-b2f9-86f7026de8b8/image.png)

위 코드가 실행되면 명령을받은 컴퓨터가 메모리에서 @1003 위치에 비어있는 메모리 공간 하나를 확보한다. 이 공간의 이름(식별자)을 myName이라고 지정한다. 여기까지가 **변수 선언** 과정이다. 이후에 우리가 myName에 접근하고자 하면 컴퓨터는 메모리에서 myName이라는 이름을 가진 주소를 검색해 해당 공간에 담긴 데이터를 반환한다.

이제 컴퓨터는 두번째 줄에 있는 `myName = "heesung"`이라는 명령을 받아 myName이라는 이름을 가진 주소를 검색해서 그곳에 "heesung"을 할당한다.

❗️여기서 중요한 점이 해당 위치에 문자열 "heesung"을 직접 저장하지는 않는다. 데이터를 저장하기 위한 별도의 메모리 공간을 다시 확보해서 문자열 "heesung"을 저장하고, 그 주소를 myName의 메모리 공간에 저장한다. 값을 저장하고 있는 위치는 point(가르키는)하는 것이다. 이를 보고 Dan abramov가 "마치 우리가 별을 손가락으로 가리키는 것과 같다"라고 한 것이지 않을까?

![](https://velog.velcdn.com/images/heesungj7/post/0a4c082c-e9e3-4b4b-b66d-b65afaea9cf4/image.png)

> 여기서 왜 값을 직접 대입하지 않고 굳이 또 공간을 할당해서 값을 저장하고 주소를 대입하는 과정을 거치는지 의문이 들 수있다. 이는 데이터의 변환을 자유롭게 하고 메모리를 효율적으로 관리하기 위한 것이다. 자세한 설명은 "코어 자바스크립트" 또는 다른 자바스크립트 책이나 블로그를 찾아보길 바란다.

이제 기존 이름만 가지고 있던 myName에 성을 추가해보고, 기본형이 "불변"이라는 뜻을 알아보자.

```javascript
let myName;
myName = 'heesung';

myName += ' jang';
console.log(myName); // "heesung jang"
```

문자열 "heesung"에 "jang"을 추가하라고 명령하면 컴퓨터는 앞서 "heesung"이 저장된 공간에 "heesung jang"을 할당하는 대신 문자열을 새로 만들어 별도의 공간에 저장하고, 그 주소를 myName 변수 공간에 연결한다.

![](https://velog.velcdn.com/images/heesungj7/post/379cbc48-cd8c-4d5a-b91a-89ee5c1bc902/image.png)

❗️ 기존 문자열에 어떤 변화를 가하든 상관없이 무조건 새로 만들어 별도의 공간에 저장한다. 이는 해당 메모리에 문자열이 아니고 숫자가 담겨있다고 해도 같다. 결국 변경은 새로 만드는 동작을 통해서만 이루어지며, 한 번 만들어진 값은 가비지 컬렉팅을 당하지 않는 한 영원히 변하지 않는다. **이것이 자바스크립트의 기본형 데이터 타입이 불편 값의 성질을 가진다는 의미다.**

#### 참고:

- [Just Javascript - Dan abramov](https://justjavascript.com/learn)
- [코어 자바스크립트](http://www.yes24.com/Product/Goods/78586788)

```toc

```
