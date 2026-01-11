# Bug Descriptions

## bug1.py - Runtime Exception (Type Error)
**Intended Behavior:** A FizzBuzz function that prints numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of 15 with "FizzBuzz".

**Bug Type:** Runtime exception - TypeError
**Error:** The variable `a` is passed as a string "101" instead of an integer, causing `range()` to fail since it expects integer arguments.

---

## bug2.py - Logical Error (Infinite Loop + Indentation)
**Intended Behavior:** Find and print the first even number starting from 1.

**Bug Type:** Logical error with indentation issues
**Errors:** 
1. The `print(i)` and `i += 2` statements are not properly indented inside the while loop
2. Starting with `i = 1` (odd) and incrementing by 2 will never produce an even number
3. This creates an infinite loop since `verif` never changes

---

## bug3.js - Execution Error + Logical Issue
**Intended Behavior:** Find and print the first even number starting from 1.

**Bug Type:** Multiple issues
**Errors:**
1. Missing shebang (`#!/usr/bin/env node`) for direct execution
2. Variable `verif` should use `let` or `const` (implicit global)
3. Logical error: starts at 1 (odd) and increments by 2, never finding an even number
4. Prints the number before checking if it's even

---

## bug4.js - Off-by-One Error
**Intended Behavior:** Calculate the average of an array of numbers.

**Bug Type:** Off-by-one error
**Error:** The loop condition uses `i <= numbers.length` instead of `i < numbers.length`, causing an attempt to access `numbers[5]` which is `undefined`. This adds `undefined` to the sum, resulting in `NaN`.

---

## bug5.c - Syntax Error + Logic
**Intended Behavior:** Print numbers from 0 to a given number (inclusive).

**Bug Type:** Syntax error
**Errors:**
1. Missing `#include <stdio.h>` header for `printf()`
2. Semicolon after closing brace in for loop (`;` after `}`) - not an error but bad practice
3. No space between printed numbers makes output hard to read

---

## bug6.c - Syntax Error
**Intended Behavior:** Generate a random number and determine if it's positive, negative, or zero.

**Bug Type:** Syntax error
**Error:** Missing semicolon after `return (0)` statement on line 15.
