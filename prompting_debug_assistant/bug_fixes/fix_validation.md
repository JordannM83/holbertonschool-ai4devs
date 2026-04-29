# Fix Validation

## Bug 1 – bug1_fixed.py

- **Input**: `a = 101`
- **Test Command**: `python3 bug_fixes/bug1_fixed.py`
- **Expected Output**: FizzBuzz sequence from 1 through 100, with multiples of 3 replaced by `Fizz`, multiples of 5 replaced by `Buzz`, and multiples of 15 replaced by `FizzBuzz`.
- **Actual Output**: `1 2 Fizz 4 Buzz Fizz ... 97 98 Fizz Buzz`
- **Result**: Fix works as expected. ✅

---

## Bug 2 – bug2_fixed.py

- **Input**: Start checking from `i = 1`
- **Test Command**: `python3 bug_fixes/bug2_fixed.py`
- **Expected Output**: `2`
- **Actual Output**: `2`
- **Result**: Fix works as expected. ✅

---

## Bug 3 – bug3_fixed.js

- **Input**: Start checking from `i = 1`
- **Test Command**: `node bug_fixes/bug3_fixed.js`
- **Expected Output**: `2`
- **Actual Output**: `2`
- **Result**: Fix works as expected. ✅

---

## Bug 4 – bug4_fixed.js

- **Input**: `scores = [85, 90, 78, 92, 88]`
- **Test Command**: `node bug_fixes/bug4_fixed.js`
- **Expected Output**: `Average score: 86.6`
- **Actual Output**: `Average score: 86.6`
- **Result**: Fix works as expected. ✅

---

## Bug 5 – bug5_fixed.c

- **Input**: `num = 10`
- **Test Command**: `gcc -Wall -Werror bug_fixes/bug5_fixed.c -o /tmp/bug5_fixed_validation` then `/tmp/bug5_fixed_validation`
- **Expected Output**: `0 1 2 3 4 5 6 7 8 9 10`
- **Actual Output**: `0 1 2 3 4 5 6 7 8 9 10`
- **Result**: Fix works as expected. ✅

---

## Summary

All corrected files in `bug_fixes/` run successfully and pass the intended test cases.
