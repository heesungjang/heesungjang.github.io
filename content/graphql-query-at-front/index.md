---
emoji: ✏️
title: Graphql은 REST API의 어떤점을 해결해주나?
date: '2021-09-17 00:00:00'
author: 장희성
tags: graphql
categories: Frontend
---

# GraphQL이 도대체 뭐야?

**GraphQL 얘기를 주변에서 너무 많이 들었다.** 프로젝트 발표에서도 면접에서도 GraphQL 관련 질문을 받았는데..그동안 계속된 프로젝트로 새로운 기술을 배울 시간이 없었는데 도대체 GraphQL 뭔지 공부 해봐야겠다.

GraphQL docs에서 제공한는 튜토이얼을 따라하기 전에 개념부터 잡고가야겠다는 생각을 했는데 마침!! kakao tech에서 정리해놓은 블로그 글을 찾았다.

[카카오 테크 참고 링크](https://tech.kakao.com/2019/08/01/graphql-basic/)

GraphQL(이하 gql)은 페이스북에서만든 쿼리 언어이고 아직 세상에 나온지 얼마되지 않은 새로운 친구이지만 2016년부터 가파르게 사용자가 늘어나고 있다고 한다.

위에서도 언급했듯이 gql은 sql과 마찬가지로 데이터를 효율적으로 요청하기 위해 사용되는 언어이지만 구조적을 큰 차이가 있고 사용 목적 또한 다르다.

sql문이 데이터베이스에서 데이터를 효율적을 가져오기 위해서 사용된다면 **gql은 웹 클라이언트가 서버로부터 효율적을 데이터를 받아오기 위해서 만들어진 쿼리 언어이다.**

- sql: 주로 백엔드 시스템에서 작성하고 호출
- gql: 클라이언트 시스템에서 작성하고 호출

웹 클라이언트가 서버로부터 데이터를 받아오는 쿼리 언어? 여기서부터 개념이 헷갈리기 시작했다. 내가 기존에 알고있던 쿼리언어는 백엔드 서버에서 클라이언트 요청을 받아 데이터베이스에 접근해 알맞는 데이터를 찾기위해 사용되는것으로 알고있는데.. **클라이언트에서 쿼리문을 작성한다고?**

사용 예시와 기존 RestAPI를 비교하면서 조금은 의문점이 풀렸다.

## REST API의 어떤 부분을 해결하려고 했나?

> Rest API와 비교: **REST API는 URL, METHOD등을 조합하기 때문에 다양한 Endpoint가 존재 합니다.** 반면, **gql은 단 하나의 Endpoint가 존재 합니다.**
> 출처: [카카오 테크 REST API와 비교](https://tech.kakao.com/2019/08/01/graphql-basic/)

### 🤔 Rest API는 다양한 Endpoint가 존재하고, gql은 단 하나의 Endpoint만 존재한다?

기존에 RestAPI 방법론으로 api를 설계한다면 필요한 resource 즉 클라이언트에서 필요한 데이터 set 별로 별도의 endpoint를 가지게 된다. 가장 최근에 진행했던 [UFO](https://github.com/heesungjang/UFO-frontend) 프로젝트의 api 문서를 살펴보자.

- /free/post
- /free/post/:post_id
- /free/post/:post_id/view_count
- /free/post/:post_id (delete)
- /free/post/:post_id (put)
- /free/post/:post_id/like

이런식으로 비슷하지만 다른 API를 생성하게되고 만약 서비스가 더 커지게 된다면 관리해야하는 endpoint가 N(resource)+1만큼 많아지게 된다.

### 🤔 OverFetching & UnderFetching

기존 RestAPI은 Over fehing과 Under ftching이라는 문제점도 가지고있다. 예를들어 아래 데이터는 UFO 프로젝트에서 유저 정보를 요청하면 받아오는 값이다.

```javascript
{
ok: true,
result: {
user_id: 1,
email: "user1@naver.com",
nickname: "user1
password: "1234",
school_auth: null,
school_email: null,
country_id: null,
univ_id: null,
createdAt: "2021-07-26T10:35:39.000Z",
updatedAt: "2021-07-26T10:35:39.000Z",
university: null,
country: null
}}
```

![](https://images.velog.io/images/heesungj7/post/d0b27e62-adcb-41de-9f86-f929fa30eef2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.26.56.png)

어떤 문제가 있을까? 바로 **OverFetching**이다. 유저 정보가 모두 필요한 부분도 있겠지만 만약 로그인 사용자의 닉네임을 헤더에 보여주기 위해서 데이터를 요청할때 유저의 닉네임을 사용하기 위해 다른 불필요한 데이터까지 모두 받아오게 되는 경우가 발생한다.

### GraphQL로 데이터 받아오기

반면 gql은 이러한 Over-fetching 문제가 발생하지 않는다. 데이터를 요청하는 시점에 어떤 정보를 원하는지에 대한 컨트롤이 가능하다.

```javascript
요청 쿼리
query{
	user(user:1){
    nickname
    }
}

반환 쿼리
{
"data":{
	"user":
    {
      "nickname: "jane",
    }
}
```

**Under Fetching**도 gql에서 손쉽게 해결이 가능한거 같다. under fetchin은 어떤 특정 데이터를 가져오기 이전에 다수의 데이터 요청이 필요한 경우이다.

```javacript
/feed/ --> /notify/ --> /user/1

```

이런식으로 하나의 유요한 정보를 받기 위해서 그때마다 여러개의 api요청을 연속적으로 호출하게된다. 단순히 요청의 단계가 많아지는 문제도 있지만 비동기 처리를 하는것도 어려워질수 있을꺼 같다.

```javascript
요청:
query {
 feed {
  comments
  likeNumber
 }
 notifications {
  isRead
 }
 user {
  username
  profilePit
 }
}

응답:
{
 feed: [
  {
   comments:1,
   likeNumber: 20
  }
 ],
 notifications: [
  {
    isRead: true
  },
 {
 ,....
```

## 🤔 클라이언트에서 쿼리를 작성하면 실제 어떤 장점이 있을까?

반면 gql은 한 번의 쿼리에 내가 정확하게 원하는 정보들을 받아올 수 있기 때문에, 여러 개의 endpoint를 가지지 않고 여러번의 API를 호출하는 일이 없어진다는 장점이있다.

또한 프로젝트를 진행하다보면 서버 개발자와 소통은 필수이다. 진행중인 서비스를 위해서 어떤한 데이터 또는 리소스를 사용자에게 보여주려면 일단 서버로부터 데이터를 받아와야한다. 이제는 웹 서비스를 "웹 어플리케이션"이라고 부를만큼 많은 액션들이 동적으로 일어나는데 당연히 데이터의 변화도 많고 그만큼 서버-클라이언트의 데이터 통신도 많다.

```javascript
/free/post
/free/post/:post_id
/free/post/:post_id/view_count
/free/post/:post_id (delete)
/free/post/:post_id (put)
/free/post/:post_id/like
```

백엔드 개발자는 보통 위 예시와 같은 각각의 endpoint를 만들고 Frontend 개발자가 이를 통해 데이터에 접근할수 있도록 공유 해야한다.

![](https://images.velog.io/images/heesungj7/post/25bdccf7-e3eb-4223-904b-e9200d8bb9ce/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-17%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.19.59.png)

기존 서버-클라이언트 협업 방식에서는 연동규격서라고 하는 API 명세서를 주고 받는 절차가 반드시 필요했다. 요즘은 swagger와 같이 API 문서화 자동화 툴도 많이 사용한다. 크고 작은 프로젝트를 진행하면서 이 API 명세서의 관리가 제대로 되지 않거나 인터페이스 변경 사항을 제때 문서에 반영하지 않아 프론트와 백엔드 개발자의 소통이 원할하게 이뤄지지 않는 경우를 많이 경험했다.

### 인트로스펙션(introspection)

gql은 서버 자체에서 현재 서버에 정의된 스키마의 실시간 정보를 공유를 할 수 있게하여 REST의 API 명세서 공유와 같은 문제를 해결해준다.

![](<https://images.velog.io/images/heesungj7/post/32bfd196-ccf9-4f1a-b343-d282f281c757/graphql-apollo-ide%20(2).png>)

서버에서 전체적인 **데이터의 모델 (스키마)를 정의해주면** 데이터의 tree 구조를 설명해주는 document가 자동으로 만들어주기 때문에 클라이언트를 작업하는 개발자는 자동적으로 만들어지는 인터랙티브한 document을 활용해서 필요한 쿼리를 만들어 사용할 수 있다.

```toc

```
