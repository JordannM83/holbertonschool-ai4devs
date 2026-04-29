# Bug Descriptions

## bug1.py

### Expected Behavior

The program should print the FizzBuzz sequence from 1 through 100. Multiples of 3 should print `Fizz`, multiples of 5 should print `Buzz`, and multiples of both 3 and 5 should print `FizzBuzz`.

### Actual Behavior

The program crashes before printing the sequence.

### Issue Type

Runtime error - `TypeError`

### Problem Analysis

The `fizzbuzz()` function expects an integer limit because it passes the value to `range(1, a)`. The variable `a` is assigned the string `"101"` instead of the integer `101`, so Python raises a `TypeError` when `range()` receives a string.

### Fix Recommendation

Assign `a = 101` or convert the value before calling the function, for example `fizzbuzz(int(a))`.

### Notes

Using `101` as the upper limit is correct because `range(1, 101)` produces numbers from 1 through 100.

---

## bug2.py

### Expected Behavior

The function should find the first even number after starting from 1, print it, and then stop.

### Actual Behavior

The program keeps printing odd numbers and never stops.

### Issue Type

Logic error - infinite loop

### Problem Analysis

The loop starts with `i = 1`. Each iteration increases `i` by 2, so `i` remains odd forever. Because `i` never becomes even, the condition `i % 2 == 0` is never true, `verif` never changes, and the loop continues indefinitely.

### Fix Recommendation

Increment `i` by 1 instead of 2, or start from an even value if the goal is to print the first even number immediately.

### Notes

The indentation in the current file is valid. The issue is caused by the loop logic, not by Python syntax or indentation.

---

## bug3.js

### Expected Behavior

The function should find the first even number after starting from 1, print it, and then stop.

### Actual Behavior

When run with Node.js, the program keeps printing odd numbers and never stops. If the file is run directly as `./bug3.js`, it may also fail because there is no shebang line.

### Issue Type

Logic error - infinite loop; execution portability issue

### Problem Analysis

The loop starts with `i = 1`. Each iteration increases `i` by 2, so `i` remains odd forever. The condition `i % 2 === 0` is never true, so `verif` remains `true` and the loop does not terminate. The file also has executable permissions but does not declare the Node.js interpreter with a shebang.

### Fix Recommendation

Increment `i` by 1 instead of 2, or start from an even value. Add `#!/usr/bin/env node` only if the file should be executed directly from the shell.

### Notes

The variable declarations already use `let`, so there is no implicit global variable issue in the current version of the file.

---

## bug4.js

### Expected Behavior

The function should calculate the average of the numbers in the array and print `Average score: 86.6` for the provided sample data.

### Actual Behavior

The program prints `Average score: NaN`.

### Issue Type

Logic error - off-by-one error

### Problem Analysis

The loop condition is `i <= numbers.length`, which allows the loop to run one iteration past the final valid index. On the extra iteration, `numbers[numbers.length]` evaluates to `undefined`. Adding `undefined` to the running sum produces `NaN`, so the final average is invalid.

### Fix Recommendation

Change the loop condition to `i < numbers.length`.

### Notes

For the sample array `[85, 90, 78, 92, 88]`, the correct sum is `433` and the correct average is `86.6`.

---

## bug5.c

### Expected Behavior

The program should compile cleanly and print the numbers from 0 through the given value, inclusive.

### Actual Behavior

The source uses `printf()` without including its standard declaration. If compiled permissively, the output is still hard to read because all numbers are printed without separators.

### Issue Type

Compilation issue; output formatting issue

### Problem Analysis

The file calls `printf()` but does not include `stdio.h`, which provides the declaration for that function. The loop itself counts from 0 through `a`, but `printf("%d", i)` prints each number directly next to the previous one, producing unclear output such as `012345678910`.

### Fix Recommendation

Add `#include <stdio.h>` at the top of the file. Print a separator after each number, such as `printf("%d ", i);`.

### Notes

The semicolon after the `for` loop block is unnecessary and should be removed for clarity, although it is not the main functional problem.

---

## bug6.c

### Expected Behavior

The program should generate a random number and print whether the number is positive, negative, or zero.

### Actual Behavior

The behavior cannot be verified from the repository because `bug6.c` is missing from the `bug_snippets` directory.

### Issue Type

Missing source file; documented syntax error

### Problem Analysis

There are two separate problems. First, the documentation references `bug6.c`, but the source file is not present, so the bug cannot be reproduced, compiled, or tested. Second, the existing description says the intended bug is a missing semicolon after `return (0)`, which would cause a C syntax error if that source file existed.

### Fix Recommendation

Add the missing `bug6.c` source file to `bug_snippets` so the bug can be reviewed directly. If the documented issue is accurate, fix the syntax error by writing `return (0);`.

### Notes

This entry should be rechecked after `bug6.c` is added. Until then, the syntax analysis is based only on the existing documentation, not on a source file in the repository.
