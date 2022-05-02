---
emoji: ✏️
title: Javascript - 데이터 타입 (2)
date: '2022-05-02 00:00:00'
author: heesung jang
tags: core
categories: core
---

### 🚪 들어가며

이전 [데이터 타입 (1)](https://heesungjang.github.io/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85/)에서 자바스크립트의 기본형 데이터를 정리하면서 정말 많은 aha!를 경험했다. 가장 핵심이되는 개념은 기본형 데이터는 모두 **불변값**이라는 것이다.

![](https://velog.velcdn.com/images/heesungj7/post/8fae1237-810c-4a8d-94cf-3473697cf114/image.png)

`console.log()`를 반복하는 2개의 반복문이 있다. 첫 번째 for 문에서는 기본형 데이터 타입인 숫자 2를 두 번째 for 문에서는 {} 빈 객체를 출력한다. 언뜻 보면 비슷해 보이는 두 반복문의 다른 점은 무엇일까?

### 가변값

기본형 데이터의 불변성을 강조하다 보니 참조형 데이터는 모두 가변 값일 것 같은 느낌을 받을 수 있다. 실제 기본적인 성질은 가변 값인 경우가 많지만, 설정에 따라 변경 불가능한 경우도 있고, 아예 불변 값으로 활용하는 경우도 있다. 대표적인 예로 redux의 state 값을 변경할 때 불변성을 유치해주는 경우가 있다.

참조형 데이터의 가변성을 이해하기 위해서 데이터가 할당되는 과정을 살펴보자.

```javascript
var myInfo = {
  age: 99,
  name: 'heesung',
};
```

일단 참조형 데이터 타입의 경우에 기본형과 다르게 메모리 힙이라는 별도에 공간에 저장된다. 메모리 힙과 콜 스택 메모리의 차이는 별도에 블로그에서 정리할 예정이다. 기본형 데이터 타입과 마찬가지로 메모리에 저장하는 과정을 개략적으로 살펴보면서 기본 원리를 이해해보자.

![](https://velog.velcdn.com/images/heesungj7/post/5c767015-3cdc-4ab2-9f77-9dbe11a56c92/image.png)

위에서도 언급했지만, 기본형 데이터와의 차이는 "객체의 변수(프로퍼티) 영역"이 별도로 존재한다는 점이다(힙 메모리). 위 예시 코드를 처리하는 과정을 살펴보면,

1. 컴퓨터는 변수를 위한 공간(메모리) 1002를 확보하고, 그 주소의 식별자(이름)을 myInfo로 지정한다.
2. 객체의 프로퍼티들을 별도에 공간에 각각 저장하고 해당 데이터의 주소들을 5001에 저장한다.
3. 이때 myInfo의 값은 5001 주소를 참조하게 된다.

기본형 데이터 타입과 마찬가지로 참조형 데이터 타입의 실제 값들, 위 예시에서는 99와 "heesung"은 모두 불변 값이다. 그러나 변수에 지정된 값인 5001은 변하지 않는다.

```javascript
var myInfo = {
  age: 99,
  name: 'heesung',
};

myInfo.age = 100;
```

이번에 나이를 99에서 100살로 변경해보자.

![](https://velog.velcdn.com/images/heesungj7/post/92d6f314-5477-43a0-b879-c811259e57fb/image.png)

100은 숫자로 기본형 데이터 타입이다. 기본형 데이터 타입의 값은 하나만 존재 할 수 있다. 현재 99는 이미 메모리에 존재하고 다른 곳에서 number 99를 사용한다면 해당 메모리 위치를 참조 할 것이다.

위 예시 코드에서 age 프로퍼티의 값을 100으로 변경했다. 컴퓨터는 데이터 영역에서 이미 100이 있는지 찾고 검색 결과가 없으므로 빈 공간인 5005에 저장하고 이 주소를 7103에 저장한다. ❗️ 여기서 주목해야 하는 부분은 바로 **1002**이다. 값의 변경이 일어났지만, 여전히 이전과 같은 _5001_ 주소를 참조하고 있다. 즉, \*\*'새로운 객체"가 만들어진 것이 아니라 기존의 객체 내부의 값만 바뀐 것이다.

바로 이 부분 때문에 흔히 참조형 데이터는 불편하지 않다 즉, '가변값'이라고 하는 것이다.

### 불변 객체

불변 객체는 최근 많이 사용되는 react와 같은 SPA 라이브러리나 프레임워크뿐 아니라 함수형 프로그래밍, 디자인 패턴 등에서도 중요한 기초가 되는 개념이다. 기본형 데이터와 마찬가지로 데이터 자체를 변경하고자 하면(새로운 데이터를 할당) 기존 데이터는 **변하지 않는다**.

```javascript
let a = 2;
let b = 2;

let c = { value: 2 };
let d = { value: 2 };

console.log(a === b); // true
console.log(c === d); // false
```

왜 a와 b는 같지만, c와 d는 다를까? 기본형 데이터는 하나만 존재한다. a에 들어있는 2와 b에 들어있는 2는 같은 메모리 주소를 바라본다. 2를 값으로 가지는 변수가 100개 있다고 해도 마찬가지다. 하지만 객체는 다르다. 우리가 객체 리터럴로 생성한 데이터는 **항상 새로운 객체를 만든다**. 이와 같은 성질을 이용해서 불변성을 확보할 수 있다.

그럼 어떤 상황에서 불변 객체가 필요할까?

간단한 예시를 먼저 살펴보자.

```javascript
var user = {
  name: 'heesung',
  age: 100,
};

function makeNewUserWithNewName(user, newName) {
  var newUser = user;

  newUser.name = newName;

  return newUser;
}

var newUser = makeNewUserWithNewName(user, 'minsoo');

console.log(user === newUser); // true

console.log(user.name); // "minsoo"
console.log(newUsern.name); // "minsoo"
```

`makeNewUserWithNewName`는 기존 유저 객체를 가지고 새로운 이름을 가진 유저를 만드는 함수이다. 만약 새로운 유저가 있다면 무언가를 하는 로직을 뒤에 작성했다면 문제가 될 수 있는 함수이다.

`var newUser = user`에서 newUser에 할당하는 값이 무엇인지 생각해보자. 유저 정보의 객체인가? 아니다 위에서 확인했듯이 user 객체를 담고 있는 메모리 주소를 값으로 가지고 있다. newUser는 해당 주소를 값으로 할당받고 결국 user와 newUser는 같은 프로프티들의 주소를 참조하게 된다.

**'객체 리터럴은 항상 새로운 객체를 생성한다'**는 원리를 이용해서 위 함수를 수정해보자.

```javascript
var user = {
  name: 'heesung',
  age: 100,
};

function makeNewUserWithNewName(user, newName = 'defaultName') {
  var newUser = { ...user, name: newName };

  return newUser;
}

var newUser = makeNewUserWithNewName(user, 'minsoo');

console.log(user === newUser); // false

console.log(user.name); // "heesung"
console.log(newUsern.name); // "minsoo"
```

자 이렇게 하면 user와 newUser는 서로 다른 객체이므로 안전하게 변경 전과 후를 비교할 수 있다. 혹시 redux를 사용해봤다면 위 코드가 익숙할 것이다.

### redux 불변성 유지

리덕스에서 상태를 업데이트해야 하는 경우에 불변성을 유지해줘야 한다는 것을 익히 들었을 것이다.

왜? 불변성을 유지 해줘야 할까? 불변성을 유지한다는 것은 무엇을 의미할까?

```javascript
var oldState = {
  name: "heesung",
  age: 100,
  profession: {
    title: "frontend developer",
    level: "junior",
  }
};

var newState = oldState; ❌

newState.profession.title = "backend developer"; ❌
```

리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경 되는 것을 감지하기 위하여 shallow equality 검사를 하기 때문이다. 보통 어플케이션의 상태 값들은, 특히 서버 데이터 같은 경우에 중첩 객체들이 깊게 중첩적인 구조를 가지고 있기 때문에 상태에 변화를 감지하기 위해서는 재귀적인 'deep comparison'이 필요하다.

하지만 불변성을 유지하면 즉, 참조가 아닌 새로운 객체를 생성하면 이를 통하여 객체의 변화를 감지할 때 객체의 깊숙한 안쪽까지 비교하지 않아도 되기 때문에 보다 효율적인 성능을 유지할 수 있는 것이다.

```toc

```
