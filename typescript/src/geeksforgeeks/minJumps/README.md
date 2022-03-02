# Minimum number of jumps

Given an array of `N` integers `arr[]` where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is `0`, then you cannot move through that element.

*Note: Return -1 if you can't reach the end of the array.*

**Example 1:**

```
Input:
N = 11 
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 

Output: 3 
```

Explanation: 

arr[0] (1)
jump
arr[1] (3)
jump
arr[4] (9)
jump
arr[10] (9)

**Example 2:**

```
Input :
N = 6
arr = {1, 4, 3, 2, 6, 7}

Output: 2 
```

Explanation: 

arr[0] (1)
jump
arr[1] (4)
jump
arr[5] (7)

**Your task:**

You don't need to read input or print anything. Your task is to complete function `minJumps()` which takes the array `arr` and it's size `N` as input parameters and returns the minimum number of jumps. If not possible returns `-1`.

Expected Time Complexity: O(N)
Expected Space Complexity: O(1)

**Constraints:**

- `1 <= N <= 107`
- `0 <= arr[i] <= 107`