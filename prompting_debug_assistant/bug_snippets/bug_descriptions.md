# Bug Descriptions

## Bug 1 – bug1.py

### Intended Behavior

The user expects the script to print the complete FizzBuzz sequence from 1 through 100, separated by spaces.

Expected output should include:

1. Regular numbers when the value is not divisible by 3 or 5.
2. `Fizz` when the value is divisible by 3 only.
3. `Buzz` when the value is divisible by 5 only.
4. `FizzBuzz` when the value is divisible by both 3 and 5.

The sequence should end after processing 100.

### Actual Behavior

The script crashes before printing the sequence.

### Issue Type

Runtime error - `TypeError`.

### Issues

1. The variable `a` is set to the string `"101"` instead of the integer `101`.
2. `range(1, a)` receives a string argument, which Python does not allow.

### Notes

Use `a = 101` or convert the value with `int(a)` before calling `fizzbuzz()`. The upper limit should be `101` because `range(1, 101)` produces values from 1 through 100.

---

## Bug 2 – bug2.py

### Intended Behavior

The user expects the function to start checking numbers from 1, find the first even number, print that even number, and stop.

If the function checks every number in order, the expected output should be:

```text
2
```

### Actual Behavior

The script keeps printing odd numbers and never terminates.

### Issue Type

Logic error - infinite loop.

### Issues

1. The loop starts with `i = 1`, which is odd.
2. The statement `i += 2` keeps `i` odd forever.
3. The condition `i % 2 == 0` is never true, so `verif` never changes.

### Notes

Increment `i` by 1 instead of 2, or start from an even number if the first printed value should be even immediately. The current file does not have an indentation problem; the failure comes from the loop logic.

---

## Bug 3 – bug3.js

### Intended Behavior

The user expects the function to start checking numbers from 1, find the first even number, print that even number, and stop when run with Node.js.

If the function checks every number in order, the expected output should be:

```text
2
```

### Actual Behavior

The program keeps printing odd numbers and never terminates. If run directly as `./bug3.js`, it may also fail because the file has no Node.js shebang.

### Issue Type

Logic error - infinite loop; execution setup issue.

### Issues

1. The loop starts with `i = 1`, which is odd.
2. The statement `i += 2` keeps `i` odd forever.
3. The condition `i % 2 === 0` is never true, so `verif` remains `true`.
4. The file has executable permissions but no `#!/usr/bin/env node` shebang for direct shell execution.

### Notes

Increment `i` by 1 instead of 2, or start from an even number. Add `#!/usr/bin/env node` only if the file is intended to run directly from the shell. The current file already uses `let`, so there is no implicit global variable issue.

---

## Bug 4 – bug4.js

### Intended Behavior

The user expects the JavaScript program to calculate the average score from the provided list of scores and print the result as a readable message.

Input array:

```javascript
[85, 90, 78, 92, 88]
```

Expected calculation:

1. Add every number in the array.
2. Divide the sum by the number of items in the array.
3. Print the final average.

The correct sum is `433`, and there are `5` scores, so the correct average is `86.6`.

Expected output:

```text
Average score: 86.6
```

### Actual Behavior

The program prints:

```text
Average score: NaN
```

### Issue Type

Logic error - off-by-one error.

### Issues

1. The loop condition uses `i <= numbers.length`.
2. The final loop iteration reads `numbers[numbers.length]`, which is outside the array.
3. Adding `undefined` to `sum` produces `NaN`.

### Notes

Change the loop condition to `i < numbers.length`. The valid indexes for the sample array are `0` through `4`, so the loop must stop before `i` reaches `5`.

---

## Bug 5 – bug5.c

### Intended Behavior

The user expects the C program to compile cleanly and print a count from 0 through the provided value, inclusive.

For the current value:

```c
int num = 10;
```

Expected behavior should include:

1. Start printing at `0`.
2. Continue one number at a time.
3. Include the final value `10`.
4. Separate the numbers so the output is readable.

Expected output:

```text
0 1 2 3 4 5 6 7 8 9 10
```

### Actual Behavior

The program uses `printf()` without including its declaration. If compiled permissively, it prints the numbers without separators:

```text
012345678910
```

### Issue Type

Compilation issue; output formatting issue.

### Issues

1. The file is missing `#include <stdio.h>`, which declares `printf()`.
2. `printf("%d", i)` prints each number directly next to the previous number.
3. The semicolon after the `for` loop block is unnecessary and makes the code less clear.

### Notes

Add `#include <stdio.h>` at the top of the file and print a separator, such as `printf("%d ", i);`. Remove the unnecessary semicolon after the `for` block for clarity.
