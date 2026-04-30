# Prompt Use Cases

## Code Quality
- **Refactoring**
  - **Goal**: Improve readability, maintainability, and performance
  - **Input**: Source function or module in a specific programming language
  - **Output**: Refactored code with a concise explanation of the changes

- **Style Enforcement**
  - **Goal**: Enforce consistent naming, formatting, and project conventions
  - **Input**: Code block or file contents
  - **Output**: Rewritten code that follows the requested style guide

- **Complexity Reduction**
  - **Goal**: Simplify overly complex logic without changing behavior
  - **Input**: Function, class, or algorithm with nested conditions or duplication
  - **Output**: Cleaner implementation with the same expected behavior

## Debugging
- **Error Analysis**
  - **Goal**: Identify the likely cause of an error message or stack trace
  - **Input**: Error output, stack trace, and relevant code snippet
  - **Output**: Explanation of the issue and suggested fix

- **Bug Reproduction**
  - **Goal**: Create a minimal reproducible example for a reported bug
  - **Input**: Bug description and related code
  - **Output**: Small test case or script that demonstrates the problem

- **Fix Proposal**
  - **Goal**: Suggest a targeted fix for incorrect program behavior
  - **Input**: Expected behavior, actual behavior, and relevant source code
  - **Output**: Corrected code with reasoning behind the solution

## Documentation
- **Function Documentation**
  - **Goal**: Explain what a function does, including parameters and return values
  - **Input**: Function or method source code
  - **Output**: Docstring or documentation block in the requested format

- **README Generation**
  - **Goal**: Create clear setup and usage instructions for a project
  - **Input**: Project structure, dependencies, and main commands
  - **Output**: Markdown README section with installation and usage steps

- **Code Explanation**
  - **Goal**: Make unfamiliar code easier to understand
  - **Input**: Code snippet or full file
  - **Output**: Plain-language explanation of the code flow and purpose

## Testing
- **Unit Test Creation**
  - **Goal**: Add tests for individual functions or components
  - **Input**: Source code and testing framework name
  - **Output**: Unit tests covering normal cases and edge cases

- **Test Case Expansion**
  - **Goal**: Improve coverage for existing tests
  - **Input**: Existing test file and implementation code
  - **Output**: Additional test cases for missing scenarios

- **Mocking Strategy**
  - **Goal**: Isolate external dependencies during tests
  - **Input**: Code that calls APIs, databases, files, or services
  - **Output**: Test examples using mocks, stubs, or fixtures

