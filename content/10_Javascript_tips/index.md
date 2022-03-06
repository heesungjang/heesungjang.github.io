---
emoji: 💰
title: 10 Javascript tips
date: '2022-02-24 00:00:00'
author: Heesung Jang
tags: javascript
categories: Frontend
---

## 1. Variable swapping by destructuring assignment

You can use ES6 destructuring assignment syntax to swap two variables

```javascript
let a = 5,
  b = ((10)[(a, b)] = [b, a]);

console.log(a, b); // 10 5
```

## 2. Avoiding for loops by creating array

You could write a simple for loop to iterate over some range like below:

```javascript
let sum = 0;

for (let i = 5; i < 10; i += 1) {
  sum += i;
}
```

However, if you want to write a range loop in functional programming way, you can create an array like below:

```javascript
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce((acc, cur) => acc + cur, 0);
```

## 3. Removing repeated values in an array using

You can use **Set** in javascript for removing repeated value in an array.
Set

"The Set object lets you store unique values of any type, A value in the Set may only occur once" - MDN

```javascript
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];

const uniqueNamesWithArrayFrom = Array.from(new Set(names));

or;

const uniqueNamesWithSpread = [...new Set(names)];
```

## 4. Merge two objects by using spread syntax

You can merge two objects and assign to new variable with spread syntax like below:

```javascript
const person = {
  name: 'Lee Sun-Hyoup',
  familyName: 'Lee',
  givenName: 'Sun-Hyoup',
};

const company = {
  name: 'Cobalt. Inc.',
  address: 'Seoul',
};

const leeSunHyoup = { ...person, ...company };

console.log(leeSunHyoup);

// {
//   address: “Seoul”
//     familyName: “Lee”
//   givenName: “Sun-Hyoup”
//   name: "Cobalt. Inc." // note that if there is a same key value, last one will take over
// }
```

## 5. && and ||

```javascript
// when you want to give a default value to a variable:
const name = participantName || 'Guest';

// when you want to conditionally operate some function:
// func will only be execute if flag is true
flag && func();

// or during object merging

const makeCompany = (showAddress) => {
  return {
    name: 'Cobalt. Inc.',
    ...(showAddress && { address: 'Seoul' }),
  };
};

console.log(makeCompany(false));
// { name: 'Cobalt. Inc.' }
console.log(makeCompany(true));
// { name: 'Cobalt. Inc.', address: 'Seoul' }
```

## 6. object destructuring

Let's get values that are actually being used:

```javascript
const person = {
    name: 'Lee Sun-Hyoup',
    familyName: 'Lee',
    givenName: 'Sun-Hyoup'
    company: 'Cobalt. Inc.',
    address: 'Seoul',
}

const { familyName, givenName } = person;
```

## 7.

Use variable name as key in an javascript object

```javascript
const name = 'Lee Sun-Hyoup';
const company = 'Cobalt';
const person = {
  name,
  company,
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }
```

## 8. Destructuring object for function argument

destructure an object that is passed to a function as an argument:

```javascript
const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompany({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present' });
```

## 9. Let's make object key dynamic!

From ES6, you can make your object key dynamic like BTS😅

```javascript
const nameKey = 'name';
const emailKey = 'email';
const person = {
  [nameKey]: 'Lee Sun-Hyoup',
  [emailKey]: 'kciter@naver.com',
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup',
//   email: 'kciter@naver.com'
// }
```

## 10. !! operator to change null, or undefined to boolean value

```javascript
function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log('wrong value');
  }
}
check(null); // wrong value
check(3.14); // 3.14
check(undefined); // wrong value
check(0); // wrong value
check('Good'); // Good
check(''); // wrong value
check(NaN); // wrong value
check(5); // 5
```

```toc

```
