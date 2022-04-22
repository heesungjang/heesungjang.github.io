---
emoji: ✏️
title: leetcode(200)- Number of Islands
date: '2022-04-22 00:00:00'
author: heesung jang
tags: leetcode, dfs
categories: algorithm
---

문제:[Number of islands]("https://leetcode.com/problems/number-of-islands/")

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

```python
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

>> Output: 1
```

1을 섬으로, 0을 물로 가정한 2D 그리드 맵이 주어졌을 때, 섬의 개수를 계산하는 문제이다. 1로 표시된 섬은 서로 **인접 노드로 연결되어 있다면 하나의 섬으로 처리**해야 한다.

### 👉풀이 접근:

1. 행열 2D 그리드에서 섬은 "1"로 표기되어 있다. 행열을 순회하면서 방문한 위치의 표기가 "1"이라면 섬의 개수를 1 증가하면 그리드에 모든 섬의 개수를 쉽게 구할 수 있다.
2. ❗️ 단, 1들이 하나의 덩어리로 즉, 여러개의 섬들이 연결되어 있다면 하나의 섬으로 처리해야 한다.
   - 입력값이 정확히 그래프는 아니지만 아래 그림과 같이 행열에서 동서남북으로 연결된 섬들을 그래프로 가정하고 dfs 탐색을 하면 연결된 모든 섬을 방문할 수 있다.
   - 이때 방문한 섬들을 "0"으로 처리하고 dfs 탐색이 끝났을 때 섬의 개수를 1 증가해주면 하나의 덩어리로 존재하는 섬을 처리할 수 있다.

![](https://velog.velcdn.com/images/heesungj7/post/bf0b6b9f-4215-4c72-ac3d-576120933335/image.png)

풀이 접근 방법만 잘 정리하면 구현 자체는 어렵지 않은 문제이다. dfs 탐색은 stack 또는 재귀 콜스택으로 처리가 가능하다.

### stack 풀이:

```python
def num_island(grid: List[List[str]]) -> int:
    # dfs 탐색에서 상하좌우 이동 할 자표 필요함
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    # 섬의 개수 카운트
    count = 0

    # rows, columns로 행열 만들고 반복문으로 순회
    rows, columns = len(grid), len(grid[0])

    for row in range(rows):
        for column in range(columns):
			# 방문한 노드가 섬이 아니라면 스킵
            if grid[row][column] != "1":
                continue

            # 섬의 방문하면 섬 카운트 1 증가
            count += 1
            # 스택에 넣고 dfs 탐색 시작
            stack = [(row, column)]

            while stack:
                x, y = stack.pop()
                # 방문 처리
                grid[x][y] = "0"

                # 상하좌우 노드 dfs 탐색
                for i in range(4):
                    nx = x + dx[i]
                    ny = y + dy[i]

                    if nx < 0 or nx >= rows or ny < 0 or ny >= columns or grid[nx][ny] != "1":
                        continue

                    stack.append((nx, ny))

    return count
```

### 재귀 푼제풀이:

```python
def num_island(grid: List[List[str]]) -> int:
	# self. 없이 grid 접근하기 위해서 메인 함수내에 중첩 함수로 dfs 정의
    def dfs(x, y):
        # 재귀 종료 조건
        if x < 0 or x >= rows or y < 0 or y >= columns or grid[x][y] != "1":
            return

        # 방문 처리
        grid[x][y] = "0"

        # 동 서 남 북 탐색
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)

    # 섬의 갯수
    count = 0

    # 행열 생성
    rows, columns = len(grid), len(grid[0])
    for row in range(rows):
        for column in range(columns):
            # 방문한 노드가 섬이 아니면 다음 노드로 이동
            if grid[row][column] != "1":
                continue

            # 방문한 노드가 섬이면 dfs 탐색 시작
            dfs(row, column)

            # dfs 탐색이 끝나면 섬 카운트 1 증가
            count += 1

    return count
```

```toc

```
