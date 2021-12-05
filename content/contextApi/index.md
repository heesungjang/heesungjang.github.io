---
emoji: ✏️
title: 리액트 contextAPI
date: '2021-05-19 00:00:00'
author: 장희성
tags: contextApi
categories: 프론트엔드
---

![](https://images.velog.io/images/heesungj7/post/4d59f32d-1320-4bb6-b0a7-75be546e7a6d/Function%20(11).png)

#### 이미 알고있는 내용
📌 React의 useState 훅으로 지역 상태를 관리 할 수 있다.
- props 다른 곳에서 사용하고 싶다면 props로 전달해야지만 자식 컴포넌트에서 상태 값에 접근이 가능하다.
- props로 여러 컴포넌트에게 상태 값을 내려 주기에는 한계가 있다.

📌 Redux
- store를 통해 전역적으로 컴포넌트가 상태 값에 접근이 가능하다.

## 🤔 contextAPI는 무엇?

> Redux와 비슷한듯 다른 contextAPI를 정리해보자

### contextAPI 특징
- React의 내장 기능으로 redux와는 다르게 리액트에서만 사용할 수 있다.
- Provider로 최상위 컴포넌트를 감싸 상태 값을 내려주는 형식이다.

## 🤔 contextAPI 사용법

**1. Context를 만들자**

- redux를 사용할때 slice별로 누어서 사용했던것과 비슷한 개념인거 같다.
- initState에 초기 상태값을 객체 형태로 전달한다.
```javascript
import { createContext } from "react";

const UserContext = createContext({initState});
```

**2. Action을 만들어준다**

- 액션을 지정하여 타입 별로 다른 로직을 진행시킬 수 있다.
- 이것도 redux에서도 action을 만들어 사용했던걸 생각하면 정말 비슷하다.

```javascript
export type Action = { type: "UPDATE"; payload };
```
**3. Reducer를 만들어준다**
- Action이 발생했을때 상태 값을 변경해주는 reducer를 작성한다.

```javascript
import { Action } from "@/actions/gameBoardAction";
import { UserState } from "@/contexts/gameBoardContext";

const updateUser = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...action.payload,
        // 변경되는 payload 로직 작성
      };
    default:
      throw new Error("Unhandled action");
  }
};
```

**3. Provider를 만들어 하위 컴포넌트를 감싸준다**

```javascript
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, userDispatch] = useReducer(userReducer, initState);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};
```

<hr/>

### State 값에는 어떻게 접근할까?

- Redux를 사용할때 useSelector를 사용해서 store의 상태 값에 접근한것과 비슷하다.

```javascript
import { useContext } from "react";

const state = useContext(UserContext);
```


> Redux가 Context API를 기반으로 만들어진 것이기 때문일까? Context API와 Redux는 사용법과 그 구조에 조금 차이가 있을 뿐 전체적으로 많음 부분이 유사하다.


리디북스에 벨로퍼트님이 redux와 contextAPI는 비슷해 보이지만 사용하는 목적이나 기능적 제한들이 분명 다르다고 정리해 놓은 블로그를 봤는데 나중에 시간이나면 그 부분도 추가해서 정리해야겠다.

```toc

```
