# Bug Reports

## Bug Report – bug1.py

- **File Name**: `bug1.py`
- **Summary**: The FizzBuzz script crashes before printing the sequence.
- **Root Cause**: The variable `a` is assigned as the string `"101"` and passed to `range(1, a)`, but `range()` requires integer arguments.
- **Resolution**: The AI suggested changing the string value to an integer or converting it with `int(a)`. The manual fix in `bug_fixes/bug1_fixed.py` changes `a = "101"` to `a = 101`.
- **Lesson Learned**: Validate input types before passing values into built-in functions that require specific types.

---

## Bug Report – bug2.py

- **File Name**: `bug2.py`
- **Summary**: The function enters an infinite loop while searching for an even number.
- **Root Cause**: The loop starts at `i = 1` and increments by `2`, so `i` remains odd forever. The condition `i % 2 == 0` is never met.
- **Resolution**: The AI suggested incrementing by `1` or starting from an even number. The manual fix in `bug_fixes/bug2_fixed.py` increments `i` by `1` and prints only when the first even number is found.
- **Lesson Learned**: Check that loop updates can actually reach the condition needed to stop the loop.

---

## Bug Report – bug3.js

- **File Name**: `bug3.js`
- **Summary**: The JavaScript function enters an infinite loop while searching for an even number.
- **Root Cause**: The loop starts at `i = 1` and increments by `2`, so `i` stays odd. The condition `i % 2 === 0` never becomes true, leaving `verif` set to `true`.
- **Resolution**: The AI suggested incrementing by `1` or starting from an even number, and adding a shebang if direct execution is required. The manual fix in `bug_fixes/bug3_fixed.js` increments `i` by `1`, prints the first even value, stops the loop, and adds `#!/usr/bin/env node`.
- **Lesson Learned**: Test loop termination conditions and consider how a script will be executed, especially when executable permissions are set.

---

## Bug Report – bug4.js

- **File Name**: `bug4.js`
- **Summary**: The average calculation returns `NaN` instead of the expected numeric average.
- **Root Cause**: The loop condition uses `i <= numbers.length`, causing one extra iteration beyond the last valid array index. The code adds `undefined` to the sum.
- **Resolution**: The AI suggested changing the loop condition to `i < numbers.length`. The manual fix in `bug_fixes/bug4_fixed.js` applies that change, producing `Average score: 86.6`.
- **Lesson Learned**: Array loops should stop before `length` because valid indexes run from `0` to `length - 1`.

---

## Bug Report – bug5.c

- **File Name**: `bug5.c`
- **Summary**: The C program does not compile cleanly under strict warnings and prints unreadable output when compiled permissively.
- **Root Cause**: The file uses `printf()` without including `<stdio.h>`. It also prints numbers without separators, and has an unnecessary semicolon after the `for` block.
- **Resolution**: The AI suggested adding `#include <stdio.h>`, separating printed values, and removing the unnecessary semicolon. The manual fix in `bug_fixes/bug5_fixed.c` adds the header, prints spaces between numbers, removes the extra semicolon, and returns `0` from `main`.
- **Lesson Learned**: Include the correct standard library headers and compile with warnings enabled to catch missing declarations early.
