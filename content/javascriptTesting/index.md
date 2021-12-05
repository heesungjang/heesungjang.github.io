---
emoji: ✏️
title: Static vs Unit vs Integration vs E2E
date: '2021-10-15 00:00:00'
author: 장희성
tags: testing
categories: 프론트엔드
---


⚠️ 작성이 완료되지 않은 글입니다.

![](https://images.velog.io/images/heesungj7/post/605a1e46-f718-4d5c-9fb1-0080e1de6408/banner.jpeg)

> "You can throw paint against the wall and eventually you might get most of the wall, but until you go up to the wall with a brush, you'll never get the corners. 🖌️ "

# Whate is testing?

소프트웨어 관점에서의 테스트는 애플리케이션이 개발자가 설계한 **요구 사항에 맞게 작동하는지 검증하는 과정이다**.

테스트는 모든 개발이 끝났을때와 같이 특정 개발 단계에서 이루어지는 것이 아니며 **모든 개발 과정의 각 단계에서 꾸준이 이뤄진다**.

프로토타입핑 단계에서 UX를 미리 검증하거나 API 통신중에 요청 또는 응답의 값을 확인하는 것, 마크업이 끝난 후 디자인 시안과 비교해보는 것 등이 모두 테스트에 해당한다.

테스트 과정은 전체적인 작업 흐름의 속도를 올려 개발을 빠르게 진행하기 위해, 그리고 새로운 변경 사항이 발생했을때 기존 코드를 무너트리지 않는다는 확신을 갖기 위해 꼭 필요한 부분이다.

테스트를 위한 라이브러리 만큼 테스트의 종류 또한 여러가지가 있지만 "범위"에 따라 크게 **단위(Unit), 통합(Integration), E2E(End to End) 테스트**로 나눌 수 있다. 

자바스크립트 테스트 도구인 testing library를 개발한 kend d dodds는 각각의 테스트 단계를 아래와 같이 정의한다.

## 🤔 What are the testings?

- **End to End 테스트**: 실제 사용자가 사용하는 것과 같은 조건에서 전체 시스템을 테스트 (functional testing 또는 e2e라고도 불림) 하는 것.

- **Intergration(통합) 테스트** : 어플리케이션의 여러 부분들이 통합되어 제대로 상호작용 되는지 테스트 하는 것.

- **Unit 테스트** : 실행되는 알고리즘 등이 잘 작동하는지 작은 단위를 떼어 내어 분리된 환경에서 테스트 하는 것.

- **Static(정적) 테스트**: syntax 에러 또는 type 에러와 같이 코드를 실행시키지 않고 테스트를 하는 것

## 1️⃣ Unit 테스트

유닛 테스트 예제를 살펴보자. 어플리케이션에 greeting이라는 함수가 있고 이 함수는 성과 이름을 받아 인사말을 리턴하는 기능을 한다. 

```javascript
const greeting = (firstName, lastName) => {
 return `Hello Mr./Mrs. ${firstName} ${lastName}`
}
```

예상하는 값이 리턴되는지 어떻게 테스트 할 수 있을까?

```javascript
test('should output firstName and lastName', () => {
 const text = greeting('Moataz', 'Mahmoud')
 expect(text).toBe('Hello Mr./Mrs. Moataz Mahmoud')
})
```

## 2️⃣ Integration 테스트

```javascript
import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from 'test/app-test-utils'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {handlers} from 'test/server-handlers'
import App from '../app'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

// integration tests typically only mock HTTP requests via MSW
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test(`logging in displays the user's username`, async () => {
  // The custom render returns a promise that resolves when the app has
  //   finished loading (if you're server rendering, you may not need this).
  // The custom render also allows you to specify your initial route
  await render(<App />, {route: '/login'})
  const {username, password} = buildLoginForm()

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  // assert whatever you need to verify the user is logged in
  expect(screen.getByText(username)).toBeInTheDocument()
})
```

## 3️⃣ End to End 테스트

```javascript
import {generate} from 'todo-test-utils'

describe('todo app', () => {
  it('should work for a typical user', () => {
    const user = generate.user()
    const todo = generate.todo()
    // here we're going through the registration process.
    // I'll typically only have one e2e test that does this.
    // the rest of the tests will hit the same endpoint
    // that the app does so we can skip navigating through that experience.
    cy.visitApp()

    cy.findByText(/register/i).click()

    cy.findByLabelText(/username/i).type(user.username)

    cy.findByLabelText(/password/i).type(user.password)

    cy.findByText(/login/i).click()

    cy.findByLabelText(/add todo/i)
      .type(todo.description)
      .type('{enter}')

    cy.findByTestId('todo-0').should('have.value', todo.description)

    cy.findByLabelText('complete').click()

    cy.findByTestId('todo-0').should('have.class', 'complete')
    // etc...
    // My E2E tests typically behave similar to how a user would.
    // They can sometimes be quite long.
  })
})
```







```toc

```
