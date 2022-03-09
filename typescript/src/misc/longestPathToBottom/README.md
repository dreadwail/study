# Longest Path to Bottom

Given a 2 dimensional grid with `#` representing "walls" and `0` representing "open", find the longest path from any cell at the top to any cell at the bottom. You can move left, right, or down. You cannot move up. You cannot re-visit the same cell twice.

**Example 1:**

```
Input:

0#
00

Output: 3

Explanation:

1#
23
```

**Example 2:**

```
Input:

#0#0
#0#0
#0#0
0000

Output: 7

Explanation:

#0#1
#0#2
#0#3
7654
```

**Example 3:**

```
Input:

000
000
000

Output: 9

Explanation:

123
654
789
```

**Constraints::**

 - Grid is always rectanglular.
 - There is always at least 1 valid path.
 - You cannot re-visit the same cell twice.
