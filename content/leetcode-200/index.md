---
emoji: ✏️
title: leetcode(200)- Number of Islands
date: '2022-03-31 00:00:00'
author: heesung jang
tags: leetcode, dfs
categories: algorithm
---

문제: [leetcode - 200](https://leetcode.com/problems/number-of-islands/submissions/) (Number of Islands)

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

섬의 개수 문제는 DFS 알고리즘의 기본 문제이다. 2x2 형태의 배열 맵이 주어진다. 시작점(루트노트)가 없고 (y,x) 위치에 한 노드는 "1"(섬) 또는 "0" 바다를 나타낸다.

### 1️⃣ 문제풀이:

1. 특정 노드에 방문했을 때 해당 노드가 '1'이면 방문처리(visited)를 한다.
2. 해당 노드의 상, 하, 좌, 우를 근접 노드의 값이 "1"라면 재귀적으로 dfs 탐색을 한다.
3. 한번의 dfs 재귀 사이클이 끝나면 해당 노드와 근접 노드들이 모두 "0" 값으로 변경되고 count 값을 1 올려준다.
   (count = dfs cycle = 섬의 수)

```python
class Solution(object):
    def numIslands(self, grid):
        # count for dfs = island
        count = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == "1":
                    self.dfs(grid, r, c)
                    count +=1
        return count


    def dfs(self, grid, r, c):
    	# 상하좌우 이동
        dy = [0, 1, 0, -1]
        dx = [1, 0, -1, 0]

        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] != "1":
            return

        grid[r][c] = "0"

        for i in range(4):
            self.dfs(grid, r + dy[i], c + dx[i])

        return
```

```toc

```
