# Time-Based Key/Value Store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

## Example

To highlight the goals of this data structure, consider this example illustrating the desired behavior:

```ts
const timeMap = new TimeMap();

// store value "bar" at key "foo" at timestamp 1
timeMap.set("foo", "bar", 1);

timeMap.get("foo", 1); // "bar"
timeMap.get("foo", 3); // "bar"

// store value "bar2" at key "foo" at timestamp 4
timeMap.set("foo", "bar2", 4);

timeMap.get("foo", 3); // "bar"
timeMap.get("foo", 4); // "bar2"
timeMap.get("foo", 5); // "bar2"
```