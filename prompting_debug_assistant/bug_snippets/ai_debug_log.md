# AI Debug Log

Prompt used for each snippet:

```text
This code throws an error / doesn't behave as expected. Can you identify and explain the issue and how to fix it?
```

## Bug 1 – bug1.py

**AI Diagnosis**: The function `fizzbuzz(a)` passes `a` into `range(1, a)`, so `a` must be an integer. The code sets `a = "101"`, which is a string. Python raises `TypeError: 'str' object cannot be interpreted as an integer` before the FizzBuzz sequence can run.

**Suggested Fix**: Change `a = "101"` to `a = 101`.

**Alternative Fixes Tested**: None.

**Result**: Fix works as expected. The script prints the FizzBuzz sequence from 1 through 100.

---

## Bug 2 – bug2.py

**AI Diagnosis**: The loop starts with `i = 1` and then uses `i += 2`, so `i` is always odd. Because `i % 2 == 0` is never true, `verif` never changes and the loop runs forever. The current `print(i)` also prints each checked value instead of only printing the first even number.

**Suggested Fix**: Increment `i` by 1 and print only when the even number is found.

**Alternative Fixes Tested**: None.

**Result**: Fix works as expected. The corrected version prints `2` and stops.

---

## Bug 3 – bug3.js

**AI Diagnosis**: The loop starts with `i = 1` and then uses `i += 2`, so `i` remains odd forever. The condition `i % 2 === 0` is never true, which means `verif` remains `true` and the loop never terminates. The file also has executable permissions but no shebang, so direct execution with `./bug3.js` may fail.

**Suggested Fix**: Increment `i` by 1 and print only when the even number is found.

**Alternative Fixes Tested**: None.

**Result**: Fix works as expected when run with Node.js. The corrected version prints `2` and stops.

---

## Bug 4 – bug4.js

**AI Diagnosis**: The loop uses `i <= numbers.length`, which runs one step past the last valid index. On the extra iteration, `numbers[numbers.length]` is `undefined`. Adding `undefined` to the sum produces `NaN`, so the average becomes invalid.

**Suggested Fix**: Change the loop condition from `i <= numbers.length` to `i < numbers.length`.

**Alternative Fixes Tested**: None.

**Result**: Fix works as expected. The corrected version prints `Average score: 86.6`.

---

## Bug 5 – bug5.c

**AI Diagnosis**: The code calls `printf()` without including `<stdio.h>`, so strict compilation fails because `printf()` is not declared. The program also prints each number without a separator, producing output like `012345678910`, which is hard to read. The semicolon after the `for` block is unnecessary.

**Suggested Fix**: Add `#include <stdio.h>`, print a separator after each number, and remove the unnecessary semicolon after the `for` block.

**Alternative Fixes Tested**: None.

**Result**: Fix works as expected. The corrected version compiles with `gcc -Wall -Werror` and prints `0 1 2 3 4 5 6 7 8 9 10`.

---

## Scope Note

Only the snippets present in `bug_snippets` are documented here. There is no `bug6.c` file in the directory, so no AI debugging entry was created for it.
