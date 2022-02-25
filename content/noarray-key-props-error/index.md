---
emoji: ❌
title: Missing "key" prop for element when there is no array
date: '2022-02-26 00:00:00'
author: Heesung Jang
tags: Missing "key" prop
categories: Errors
---

## 🤔 Missing "key" prop..? but no array..?

If you are **reading this post**, you've probably got an error like this where you don't even have any array.map in your component.

![](https://images.velog.io/images/heesungj7/post/aedd353c-6b29-420e-90cf-572c08b44c12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-26%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.12.13.png)

This is an issue with eslint-plugin-react version 7.29.0.

To fix the issue, simply down grade eslint-plugin-react to 7.28.0.

```
npm i eslint-plugin-react@7.28.0
```

Reference: https://github.com/yannickcr/eslint-plugin-react/issues/3215
