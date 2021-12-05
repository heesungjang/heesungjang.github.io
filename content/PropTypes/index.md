---
emoji: ✏️
title: 리액트 contextAPI
date: '2021-05-05 00:00:00'
author: 장희성
tags: contextApi
categories: 프론트엔드
---

## ✏️ propTypes를 통한 props 검증

- 리액트에서는 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달한다. 
- 이 과정에서 `prop-types`를 사용하면 전달되는 props의 타입(type)을 미리 지정하여 원치않는 데이터의 값이나 타입이 전달되는것을 보다 쉽게 디버깅할 수 있게 해준다.


```javascript
class MyComponent extends React.Component {
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                <h1>안녕하세요, 제 이름은 {name} 입니다.</h1>
                <span>children 값은 {children} 입니다.</span>
                <hr />
                <p>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</p>
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};
```

>예제 코드에서는 name과 favoriteNumber로 부모에서 자식 컴포넌트로 전달되는 props를 검증한다.

`name props`는 문자열 전달받는다고 미리 설정해줬다. 만약 부모 컴포넌트에서 name으로 문자열이 아닌 숫자 또는 객체 형태의 데이터를 넘겨주게 되면 console통해 경고 메세지를 전달해준다.

### 📌 propTypes를 반드시 사용해야 할까?

- propTypes를 반드시 사용할 필요하는 없다. 
- proptypes로 props의 타입들을 미리 설정하고 검증할 수 있지만 console에 경고를 보여줄뿐 타입 에러로 어플리케이션이 멈추지는 않는다.

하지만 React를 사용한 프로젝트의 규모가 커지고 다른 개발자들과 협업을 해야하는 상황이라면 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 높아질 수 있다. 

또한 콘솔에 나타나는 proptype 에러 메세지를 통해 효율적인 디버깅이 가능해진다.

```toc

```
