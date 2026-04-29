# Bug Descriptions

## bug1.py

### Intended Behavior

A FizzBuzz function should print numbers from 1 to 100, replacing multiples of 3 with `Fizz`, multiples of 5 with `Buzz`, and multiples of 15 with `FizzBuzz`.

### Issue Type

Runtime exception - `TypeError`

### Observed Behavior

The program crashes before printing the FizzBuzz sequence.

### Root Cause

The function receives the wrong data type for the upper limit.

### Issues

1. The variable `a` is assigned the string `"101"` instead of the integer `101`.
2. `range(1, a)` fails because `range()` expects integer arguments.

### Suggested Fix

Convert `a` to an integer or assign it as `101` before passing it to `fizzbuzz()`.

### Notes

The loop uses `range(1, a)`, so passing `101` prints values from 1 through 100.

---

## bug2.py

### Intended Behavior

The function should find and print the first even number while starting from 1.

### Issue Type

Logic error - infinite loop

### Observed Behavior

The program keeps printing odd numbers and never stops.

### Root Cause

The update step prevents `i` from ever becoming even.

### Issues

1. The loop starts with `i = 1`, which is odd.
2. The value of `i` is increased by 2 each time, so it remains odd forever.
3. The condition `i % 2 == 0` is never true, so `verif` never changes and the loop never stops.

### Suggested Fix

Increment `i` by 1, start from an even number, or update the loop condition so the function can reach an even value.

### Notes

The indentation in the current file is valid; the failure is caused by the loop logic.

---

## bug3.js

### Intended Behavior

The function should find and print the first even number while starting from 1.

### Issue Type

Logic error - infinite loop; execution portability issue

### Observed Behavior

When run with Node.js, the program keeps printing odd numbers and never stops. When run directly as an executable script, it may fail because there is no shebang line.

### Root Cause

The update step prevents `i` from ever becoming even, and the file does not declare which interpreter should run it.

### Issues

1. The loop starts with `i = 1`, which is odd.
2. The value of `i` is increased by 2 each time, so it remains odd forever.
3. The condition `i % 2 === 0` is never true, so `verif` remains `true` and the loop never stops.
4. The function prints `i` before moving to the next value.
5. The file has executable permissions but no `#!/usr/bin/env node` shebang for direct shell execution.

### Suggested Fix

Increment `i` by 1 or start from an even number. Add `#!/usr/bin/env node` if the file should run directly with `./bug3.js`.

### Notes

The variable declarations already use `let`, so there is no implicit global variable issue in the current file.

---

## bug4.js

### Intended Behavior

The function should calculate and return the average of an array of numbers.

### Issue Type

Logic error - off-by-one error

### Observed Behavior

The program prints `Average score: NaN` instead of the numeric average.

### Root Cause

The loop iterates one time past the last valid array index.

### Issues

1. The loop condition uses `i <= numbers.length` instead of `i < numbers.length`.
2. The loop tries to access `numbers[numbers.length]`, which is outside the array.
3. Adding `undefined` to `sum` produces `NaN`, so the returned average is invalid.

### Suggested Fix

Change the loop condition to `i < numbers.length`.

### Notes

For the sample array `[85, 90, 78, 92, 88]`, the expected average is `86.6`.

---

## bug5.c

### Intended Behavior

The program should print numbers from 0 to a given number, inclusive.

### Issue Type

Compilation issue and formatting issue

### Observed Behavior

The program may fail to compile cleanly because `printf()` is used without including its declaration. If compiled anyway, the output is hard to read because the numbers are printed without separators.

### Root Cause

The source file uses the standard I/O library without including its header, and the output formatting does not separate values.

### Issues

1. The file is missing `#include <stdio.h>`, which is required for `printf()`.
2. The semicolon after the `for` loop block is unnecessary.
3. The output has no spaces or separators between numbers, making it hard to read.

### Suggested Fix

Add `#include <stdio.h>` and print a separator after each number, such as a space.

### Notes

The extra semicolon after the `for` block is not the main failure, but removing it makes the code cleaner and less confusing.

---

## bug6.c

### Intended Behavior

The program should generate a random number and determine whether it is positive, negative, or zero.

### Issue Type

Missing source file; documented syntax error

### Observed Behavior

The bug cannot be reproduced from the repository because the source file is missing.

### Root Cause

The documentation and the available snippet files are out of sync.

### Issues

1. `bug6.c` is described in this document but is not currently present in the `bug_snippets` directory.
2. The documented syntax error is a missing semicolon after the `return (0)` statement.

### Suggested Fix

Add `bug6.c` to the `bug_snippets` directory or remove this entry from the descriptions file. If the intended file is added, include the missing semicolon after `return (0)`.

### Notes

This entry should be verified once the actual `bug6.c` source file is available.
