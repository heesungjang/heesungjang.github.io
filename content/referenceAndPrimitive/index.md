---
emoji: ✏️
title: reference vs. primitive
date: '2021-05-13 00:00:00'
author: 장희성
tags: 자바스크립트
categories: 자바스크립트
---


### ✏️ Primitive Type(원시 타입) 

원시 타입 예제:

```javascript
var age = 28
```
여기서 age 변수는 28이라는 number type을 할당받는다.

number는 원시 값 혹은 **primitive value**라고 부른다.

```javascript
var name = 'Max' 
var isMale = true
```

자바스크립트의 뼈대가 되는 타입, 즉 가장 심플한 자바스크립트 빌등 블럭을 원시 타입이라고 부르고 **number 말고도 string, null, undefined, bloolean을 포함해 5가지가 존재한다**. 

### ✏️ Reference Type(참조 타입) 

참조 타입 예시:

```javascript
var person = {
  name: 'Max',
  age: 28,
}

var hobbies = ['Sports', 'Cooking']

```
위에 예시 코드에서 person은 잘 알고있는 객체와 배열이다.

**객체와 배열의 타입은 참조 타입이며** 여기서 중요하게 봐야하는 부분은 참조 타입이지만 원시 타입의 값들을 가진다는 것이다. 


<hr/>

### 🤔 원시, 참조 타입은 어떻게 다른가?

> 자바스크립트 언어는 2가지의 memory를 가진다.
1. **Stack**
2. **Heap**

**스택**은 기본적으로 액세스하기 쉬운 메모리로서 항목을 스택으로 관리한다. 스택에 올라갈수 있는 데이터는 숫자, 문자열, bloolean같이  크기를 미리 알수있는 타입이다.


**힙**은 정확한 크기와 구조를 미리 결정할 수 없는 항목의 메모리이다. 객체와 배열은 런타임중에 변경이 일어날 수 있는 힙으로 이동한다.

![](https://images.velog.io/images/heesungj7/post/9d96dfcd-49a3-43e2-9d4b-bbb7786eff0b/ref-type-pointer.png)

- 원시 타입은 변수에 할당될 때 메모리 상에 고정된 크기로 저장되며 해당 변수가 원시 데이터의 값을 보관한다. 
- 원시 타입 자료형은 모두 변수 선언, 초기화, 할당시 값이 저장된 메모리 영역에 직접적으로 접근한다.
- 즉 변수에 새 값이 할당 될 때 변수에 할당된 메모리 블럭에 저장된 값을 바로 변경된다.


- 참조 타입 데이터는 크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될 수 없으며, 변수에는 데이터에 대한 참조만 저장된다. 
- 변수의 값이 저장된 힙(Heap) 메모리의 주소값을 저장한다. 참조 타입은 변수의 값이 저장된 메모리 블럭의 주소를 가지고 있고, 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용해서 변수의 값에 접근한다.

<hr/>

## 이걸 왜 알아야 할까?

자바스크립트를 사용해서 어플리케이션을 개발하면 객체를 사용하는일이 많다. 객체는 참조 타입이고 참조 타입의 작동하는 원리를 잘못알고 있다면 이해하지 못하는 일이 발생할 수 있다.

**📌 각 변수 간에 원시 타입 데이터를 복사할 경우 데이터의 값이 복사된다.**

```javascript
var x = 100;

var y = x;

x = 99;

console.log(y) ===> 100

```
<hr/>

아래 예시 코드에서 person이라는 변수는 무엇을 저장하고 있을까?

```javascript
var person = { name: 'Max' }
```

a)  ({ name: 'Max' }) 객체

b) 객체를의 메모리 위치 포인터

c) name의 메로리 위치 포인터


**정답은 b - 객체를의 메모리 위치 포인터이다.**

```javascript
var person = { name: 'Max' }
var newPerson = person
newPerson.name = 'Anna'
console.log(person.name)  print?
```
위 예시 코드에서 어떤 값이 콘솔에 출력될까?

```javascipt
> "Anna"
```
당연하거 아닌가?라고 생각할 수 있지만 왜 Anna가 출력되는지 정확하게 이해하고 넘어가야 한다.

**📌 각 변수 간에 참조 타입 데이터를 복사할 경우 데이터의 참조가 복사된다.**
- 'person'과 'newPerson'는 동일한 참조를 담고 있으며, 따라서 동일한 객체를 가르킨다.







```toc

```