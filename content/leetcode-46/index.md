---
emoji: ✏️
title: leetcode(46) - permutation
date: '2022-04-19 00:00:00'
author: heesung jang
tags: leetcode
categories: algorithm
---

문제:[leetcode-46](https://leetcode.com/problems/permutations/submissions/)[Permutation]

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

```
Input: nums = [1,2,3]

Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

정수로 이루어진 배열을 입력 값으로 받고 해당 정수를로 조합 가능한 모든 순열을 만드는 문제이다.
![](https://velog.velcdn.com/images/heesungj7/post/206e43bc-0002-4baa-a151-699287a7c7c6/image.png)
순열의 수를 추출하는 건 고등학교 수학 시간에 배웠으며 이산수학에도 등장하는 수식으로 어렵지 않게 계산할 수 있다. 이 예제값의 순열의 수 수식은 이 되고, 분모는 (3-3) !=1 이므로 분자의 팩토리얼factorial만 계산하면 순열의 수는 3!=3×2×1=6이 된다. 하지만 수학식에 대입해서 가능한 경우의 수를 계산하는게 아니라 가능한 모든 조합을 모두 출력하는건 쉽지 않다.

이 문제는 그래프로 접근해야 한다. 위 그림처럼 순열이란 결국 모든 가능한 경우를 그래프 형태로 나열한 결과라고 할 수 있다.

### 문제풀이:

위 그래프에서 리프 노드(leaf node) 즉, 마지막 노드의 값이 순열의 최종 결과이다. 이때 자식 노드의 개수를 살펴보면 root 노드는 3개 그 다음은 2개, 1개 순으로 작아지는 걸 볼 수 있다. 이는 위에서 풀이한 순열이 수식(3! = 3*2*1)과 동일하다. 예를 들어 입력값이 4개라면 root 부터 자식 노드의 개수는 4*3*2\*1 로 순열의 경우의 수는 24개가 될 것이다.

이제 위 그래프를 DFS 탐색 알고리즘으로 풀이해보면 for문을 돌며 이전 값을 하나씩 덧붙여 계속 재귀 호출을 진행하다 리프 노드에 도달한 경우 즉, elements 의 개수가 0이 된 지점에 결과에 추가한다.

dfs 재귀에서는:

1. 목록에서 하나의 요소를 선택하고 사용 가능한 정수 목록에서 제거한다.
2. 나머지 목록에 대한 모든 순열을 생성하고 현재 조합중인 리스트(num_set)에 추가한다.
3. dfs방식으로 리프 노드까지 탐색이 끝나면 결과(result)에 담고 pop() 하여 다음 노드를 탐색한다.

```python
def permute(nums: List[int]) -> List[List[int]]:
    # 탐색이 끝나면 조합된 순열을 추가
    result = []

    # 현재 탐색중인 순열 조합
    nums_set = []

    def dfs(elements):
        # 종료 케이스
        if len(elements) == 0:
            # 다름 dfs 탐색에서 같은 리스트를 사용하기 때문에 레프런스가 아닌 새로운 배열을 추가
            result.append(nums_set[:])

        for num in elements:
            # 마찬가지로 elements는 다음 num에도 같은 같으로 사용되므로
            # 새로운 리스트를 생성
            new_list = elements[:]
            # 방문처리 := 현재 이미 사용한 숫자는 다음 dfs 탐색에서 제외
            new_list.remove(num)

            nums_set.append(num)
            dfs(new_list)

            # 백트래킹 하면서 올라올때 num을 다시 pop해줘서 빈 배열로 다시 만들어줌
            nums_set.pop()

    # dfs 탐색 시작
    dfs(nums)

    # dfs 탐색이 끝나면 result 반환
    return result
```

```toc

```
