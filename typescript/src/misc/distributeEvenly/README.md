# Distribute evenly

At XYZ, we often have to make a number of payments to different recipients from a single pool of money. These payments need to follow many different rules that seem simple individually but can become complex when considered together. This problem below doesn't reflect any specific real-world set of rules, but it's fairly representative of the types of problems we need to solve.

Given an amount of money to distribute, a list of recipients, and how much money each is owed, you should return the list of recipients and how much each would be paid after following the business logic below:

- No recipient is paid more than they are owed
- The amount is divided as evenly as possible between the recipients

**Example**

```
Input: { c: 10, b: 10, a: 10, d: 10 } , 38
Output: { c: 9, b: 10, a: 10, d: 9 }
```