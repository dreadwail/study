# Find halfway course

You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

**Example 1:**

```ts
const input = [
  ['Foundations of Computer Science', 'Operating Systems'],
  ['Data Structures', 'Algorithms'],
  ['Computer Networks', 'Computer Architecture'],
  ['Algorithms', 'Foundations of Computer Science'],
  ['Computer Architecture', 'Data Structures'],
  ['Software Design', 'Computer Networks']
]

const output = findHalfwayCourse(input) // 'Data Structures'
```

**Example 2:**

```ts
const input = [
  ['Data Structures', 'Algorithms'],
  ['Algorithms', 'Foundations of Computer Science'],
  ['Foundations of Computer Science', 'Logic']
]

const output = findHalfwayCourse(input) // 'Algorithms'
```

**Example 3:**

```ts
const input = [
    ["Data Structures", "Algorithms"],
]

const output = findHalfwayCourse(input) // 'Data Structures'
```
