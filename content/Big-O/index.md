---
emoji: ✏️
title: Big O notation
date: '2021-06-19 00:00:00'
author: heesung jang
tags: Algorithm
categories: Algorithm
---

# Time complexity & space complexity

- Time complexity is a concept representing the efficiency of the code by predicting the execution time.
- Spatial complexity is a concept that represents the efficiency of memory allocation.

## Big O 표기법

- Method of evaluating the "efficiency" of an algorithm by mathematically expressing the performance of the algorithm.
- Note that, since the goal is to predict the performance of the algorithm rather than to calculate the exact running time of the actual algorithm, constants are not indicated in Big O notation.

`eg. O(2n) -> O(n)`

## O(1)

-> **Constant**

Algorithm that takes a constant time regardless of the data size.

```python
def is_zero(x):
    return (x==0)
```

## O(n)

-> **Linear**

An algorithm that processing time increases in proportion to the size of the input data eg.) linear search algorithm.

```python
def print_length(n: list):
    for x in n:
       print(len(n))
```

## O(n²)

-> **quadratic**

As data increases, processing time increases rapidly.
e.g) nested loop (n² matrix).

```python
def f(n):
  for i in len(n):
      for j in len(n):
        print(i + j);
```

## O(nm)

Similar to quadratic, but in the second loop, the size of m is less than n.

```python
def f(n,m):
    for i in len(n):
       for i in len(m):
         print(i+j)
```

## O(n³)

If o(n²) is a matrix with width and length, o(n³) has a cubic shape. Think of a triple nested for loop that repeats n data.

```python
def f(n):
  for i in len(n):
      for j in len(n):
          for k in len(n):
              print(i+j+k)
```

## O(2ⁿ)

popular example: Fibonacci sequence

```python
def f(n, r):
    if (n <= 0):
        reutrn 0;
    elif (n == 1):
        return r[n] =1
    return F(n - 1, r) + F(n - 2, r)
```

```toc

```
