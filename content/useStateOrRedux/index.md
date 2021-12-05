---
emoji: ✏️
title: useState? redux?
date: '2021-06-10 00:00:00'
author: 장희성
tags: useState state redux react
categories: 프론트엔드
---
![](https://images.velog.io/images/heesungj7/post/e5164da3-d8c9-422a-b50f-3b40b6dd6d49/Function%20(8).png)> 

"왜 redux가 꼭 필요한가..?" 🤔 문득 이런 생각이 들었다. 

항상 프로젝트를 진행할때 redux를 써야할까? 라는 의문을 가지면서도 이미 redux를 통해 전역으로 state를 관리하는데 익숙해져서 (툴킷이 너무 편해서..) 그냥 너무나 자연스럽게 리덕스를 사용해왔다. 이번 기회에 정확히 redux가 어떤 이점이 있는지 또 로컬에서 상태 값을 관리할때와 어떤 차이가 있는지 정리 해보자.

## State(상태)

일단 react에서 상태란 어떤걸 의미하는가?

리액트 컴포넌트에서 **동적인 값을 상태(state)** 라고 부른다. 사용자 인터랙션을 통해 컴포넌트의 상태값이 동적으로 바뀔 경우에는 상태를 관리하는 것이 필요하다.

16.7버전 리액트 이전에는 클래스 컴포넌트에서 this를 binding해서 상태값을 관리했다면 **React hooks**의 내장 함수인 **useState()** 가 나오면서 이를 통해 함수형 컴포넌트에서도 상태를 관리할 수 있다.

> - 리액트 컴포넌트 또한 함수이며 jsx를 리턴하기 위해서는 함수 호출이 있어야한다.
- 리액트는 첫 실행에서 index.js를 통해서 컴포넌트들을 연속적으로 호출하며 모든 컴포넌트의 호출이 끝나면 다시 호출하지 않는다.
- e.g) let variable의 값을 온클릭 이벤트에서 업데이트해도 컴포넌트는 다시 리랜더링하지 않는다. 

## 🤔 그렇다면 전역 상태 관리는 무엇이고? 왜 필요한가?

> 먼저 전역 상태라는 단어는 ‘전역’이라는 단어와 ‘상태’라는 단어의 합성어이다.

- 보통 애플리케이션에서 관리하는 상태는 다음 두 가지로 나눌 수 있다.
- 외부에서 서버 통신으로 받는 동적인 데이터
- 애플리케이션 UI를 결정하는 상태 (ex. isClosed)

이런식으로 렌더링하기 위한 동적인 데이터나 사용자 액션을 제어하기 위한 UI 상태 두 종류이다. UI 상태와 같이 컴포넌트 안에서 로컬로 사용되는 경우 관리하기가 상대적으로 쉽다.

### 전역 상태를 고민하는 시점
로컬에서 UI요소를 결정 해주는것처럼 특정 컴포넌트에 특화되어있는 상태를 만들때는 어디서 이 상태를 정의해주고 관리하며 사용할까? 라는 고민을 할 필요가 없다.

하지만 비동기 요청으로 외부에서 데이터를 불러오게 되면 데이터를 어디서 언제 호출해서 관리해야할까? 라는 고민이 생기기 시작한다.

```javascript
const [searchResult, setSearchResult] = useState([]); // 게시물 리스트 배열

 const MainSearchApi = async ({ keyword, pageSize, pageNum }) => {
        setIsLoading(true);
        await instance
            .get("util/search", {
                params: {
                    keyword,
                    pageSize,
                    pageNum,
                },
            })
            .then(res => {
                if (res.data.ok) {
                    setSearchResult(prev => [...prev, ...res.data.result]);
                    setSearchResult(res.data.result);
                    setTotalPage(res.data.totalPage);
                    setNextPage(currentPage + 1);
                    setCurrentPage(prev => prev + 1);
                }
            });
        setIsLoading(false);
    };
```

예시로 위에 코드는 실제 UFO 프로젝트에서 검색 페이지에서 유저가 입력한 **search term**으로 서버에 요청을 보내 검색 결과를 받아오는 부분이다. 컴포넌트가 실행되면 useEffect()안에 비동기 요청을 하고 검색 결과가 담긴 배열을 **setSearchResult()** 에 담아준다. 

저장된 데이터(state)은 화면을 그려주는 presenter 컴포넌트로 props 넘겨준다.

리액트에서는 이렇게 데이터를 부모 컴포넌트에서 자식 컴포넌트로 데이터를 넘겨줄수 있다. 

부모에서 자식으로 또 그 자식이 부모 컴포넌트로서 또다른 자식 컴포넌트에게 데이터를 전달할수 있는데 이것을 **Prop Drilling**이라고 한다.

> 문제는 이렇게 데이터를 전달하다보면 처음 데이터를 요청해서 받는 부모 컴포넌트와 컴포넌트 트리 가장 하단에 있는 자식 컴포넌트와의 거리가 너무 멀어질때 발생한다.

예를들어 A 컴포넌트에서 데이터를 받아 Z 컴포넌트에 전달한다면 중간에 위치하는 B~Y 컴포넌트는 오로지 데이터를 전달하기 위해 props를 받아 전달하는 비효율이 발생한다.


### 그렇다면 데이터를 각각 필요한 컴포넌트에서호출하면 되는거 아닌가?

📌 불필요한 네트워크 비용을 줄이기 위해서 필요한 시점에 데이터를 불러오는 것이 맞다. 그리고 데이터를 필요로 하는 컴포넌트에서 데이터를 호출하는 것이 응집도가 높아지는 방향이다. 여기서 발생하는 문제점은 API의 응답 구조와 컴포넌트 트리가 일치하리라는 보장이 없다는 것이다.

그렇다면 불필요한 네트워크 비용을 줄이면서 컴포넌트들이 외부에 데이터를 공유할수는 없을까?에서 Redux와같은 전역 상태 툴의 필요성을 느끼게된다.


## Redux

리덕스 자세하게 정리하는 블로그는 다음에 써보도록 하고 redux가 무엇을 도와주는지 간단하게 정리하고 넘어가겠다.

리덕스는 리액트에서 가장 많이 사용되는 상태 관리 라이브러리중 하나이다. 리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 효율적으로 관리할 수 있다. 최근 Redux Toolkit이 등장하면서 더욱 더 이 효율성은 빛을 보이고 있다.

리덕스는 상태를 store에 저장하고 관리한다. 이 store는 모든 컴포넌트에서 접근이 가능하기 때문에 컴포넌트 위치에 상관없이 언제 어디서나 store내에 있는 상태에 접근이 가능하다.

### Redux 사용예시

```javascript

// App.js
useEffect(() => {
        if (is_token) {
            dispatch(checkLoggedInUser());
            dispatch(checkAdminDB());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isLoggedIn]);

//user.js (redux파일)

export const checkLoggedInUser = createAsyncThunk(
    "user/check/login",
    async (data, thunkAPI) => {
        // 로컬 스토리지 토큰 불러온다.
        const token = localStorage.getItem("token");
        // 토큰 decode를 통해서 현재 로그인한 유저 id 가져오기
        const { user_id: userId } = jwt(token);
        try {
            // 서버에 유저 정보 요청
            const loggedInUser = await userApi.getUser(userId);
            if (loggedInUser.data.ok) {
                const user = loggedInUser.data.result;
                return user;
            } else {
                return thunkAPI.rejectWithValue(loggedInUser.data.errorMessage);
            }
        } catch (err) {
            // 에러 발생시 에러 메세지 반환
            Sentry.captureException(`error, 유저로그인유무 : ${err}`);
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    },
);
```

위 예시는 유저의 로그인 유뮤를 검사해주는 코드의 일부를 가져왔다.

1. react가 컴포넌트를 랜더하고 App.js가 실행되면 현재 유저가 로그인을 했는지 안했는지를 확인하고 리덕스에서 관리하는 isLoggedIn 값을 true 또는 false로 변경한다. 이렇게 저장된 유저의 로그인 상태값은 store를 통해서 모든 컴포넌트에서 접근이 가능해진다.

> 더이상 props를 전달해주거나 다른 곳에서도 값이 쓰일 경우 state를 lifting 해줄 필요가 없다. 필요로 하는 값은 redux에 접근하여 useSelector 로 원하는 값을 가져오면 된다. 컴포넌트의 구조 변경에도 자유로워진 것 같고 코드가 훨씬 깔끔해졌다.





```toc

```
