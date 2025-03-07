/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Step 1: Remove all unnecessary spaces
    expression = expression.replace(/\s+/g, '');

    // Step 2: Validate the expression for allowed characters
    if (!/^[0-9+\-*/().]*$/.test(expression)) {
      throw new Error("Invalid characters in the expression");
    }

    // Step 3: Check for mismatched parentheses
    if ((expression.match(/\(/g) || []).length !== (expression.match(/\)/g) || []).length) {
      throw new Error("Mismatched parentheses");
    }

    // Step 4: Check for division by zero before evaluating the expression
    if (expression.includes('/0')) {
      throw new Error("Cannot divide by zero");
    }

    // Step 5: Try to evaluate the expression safely
    try {
      this.result = this.evaluateExpression(expression);
      return this.result;
    } catch (error) {
      throw new Error("Error in evaluating the expression");
    }
  }

  evaluateExpression(expression) {
    // Step 6: Parse and compute the expression using JavaScript's built-in arithmetic evaluation
    try {
      return new Function('return ' + expression)(); // Evaluates the arithmetic expression
    } catch (e) {
      throw new Error("Invalid expression format");
    }
  }
}
const calculator = new Calculator();
// Example usage
try {
  console.log("Result after calculation: ", calculator.calculate("10 + 2 * ( 6 - (4 + 1) / 2 ) + 7"));
  console.log("Final Result: ", calculator.getResult());
} catch (e) {
  console.error(e.message);
}
module.exports = Calculator;






